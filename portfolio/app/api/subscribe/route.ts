import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory array to store emails as requested
// IMPORTANT: In production, consider migrating this to a database like Supabase
// or adding the contact directly to a Resend Audience using:
// resend.contacts.create({ email, audienceId: '...' })
const subscribers: string[] = [];

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "L'adresse email est requise." },
        { status: 400 }
      );
    }

    // 1. Store the email in the in-memory array
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      console.log(`[CV Tailor] Nouvel inscrit beta: ${email}`);
      console.log(`[CV Tailor] Total d'inscrits: ${subscribers.length}`);
    }

    // If no API key is provided, log a warning and return success for testing UI
    if (!process.env.RESEND_API_KEY) {
      console.warn("ATTENTION: RESEND_API_KEY n'est pas défini dans .env ou .env.local");
      return NextResponse.json({ 
        success: true, 
        message: "Inscription réussie (Mode Simulation: API Key manquante)" 
      });
    }

    // 2. Send confirmation email using Resend
    // NOTE: You must have a verified domain in your Resend account to use a custom 'from' address.
    // Replace "beta@cvtailor.fr" with your actual verified domain on Resend,
    // e.g., "hello@guerjouma.site"
    const { data, error } = await resend.emails.send({
      from: "CV Tailor <onboarding@resend.dev>", // Default testing domain. Change to your verified domain.
      to: [email],
      subject: "Bienvenue sur la beta de CV Tailor 🚀",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1a1a1a; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #050505;">Salut !</h2>
          <p style="font-size: 16px; line-height: 1.5;">
            Merci ! Tu es sur la liste beta pour <strong>CV Tailor</strong>.
          </p>
          <p style="font-size: 16px; line-height: 1.5;">
            On te contactera très prochainement dès que ton accès sera prêt. Tu pourras alors générer ton CV parfait, taillé sur mesure par l'IA pour chaque offre d'alternance.
          </p>
          <br/>
          <p style="font-size: 16px; color: #666;">
            À très vite,<br/>
            L'équipe CV Tailor
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[CV Tailor] Erreur Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("[CV Tailor] Server error:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}
