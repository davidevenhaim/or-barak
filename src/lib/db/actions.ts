"use server";

import { NewLead } from "../types/new-lead";
import { supabase } from "./supabase";

export async function createNewLead(lead: NewLead) {
  const { data, error } = await supabase
    .from("leads")
    .insert({
      name: lead.name,
      email: lead.email,
      project_type: lead.projectType,
      description: lead.description
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create lead: ${error.message}`);
  }

  return data;
}
