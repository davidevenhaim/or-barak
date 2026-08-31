"use server";

import { Resend } from "resend";
import { NewLead } from "../types/new-lead";
import { supabase } from "./supabase";

const NOTIFICATION_TO = "orbarak808@gmail.com";
// Resend's shared sender — works without a verified domain.
const NOTIFICATION_FROM = "onboarding@resend.dev";

async function sendLeadNotification(lead: NewLead) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: NOTIFICATION_FROM,
    to: NOTIFICATION_TO,
    subject: `New inquiry from ${lead.name}`,
    replyTo: lead.email,
    text: [
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      "",
      "Message:",
      lead.description || "(no message)"
    ].join("\n")
  });
}

export async function createNewLead(lead: NewLead) {
  const { data, error } = await supabase
    .from("leads")
    .insert({
      name: lead.name,
      email: lead.email,
      description: lead.description
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create lead: ${error.message}`);
  }

  // The lead is saved — a notification failure must not break the submission.
  try {
    await sendLeadNotification(lead);
  } catch (notificationError) {
    console.error("Failed to send lead notification email:", notificationError);
  }

  return data;
}
