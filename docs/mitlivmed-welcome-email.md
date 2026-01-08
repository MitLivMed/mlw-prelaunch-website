# MitLivMed Waitlist Welcome Email

> Triggered when someone submits the Tally signup form.  
> Tone: Warm Scandinavian Clarity — calm, grounded, human. Not clinical, not salesy.

---

## Danish Version (Primary)

**From:** MitLivMed <hello@mitlivmed.dk>  
**Subject line options (pick one):**
1. `Du er på listen ✓`
2. `Tak fordi du skrev dig op`
3. `Vi ses i 2026`

**Preview text:** Vi glæder os til at dele MitLivMed med dig.

---

### Email Body (Danish)

```
Hej,

Tak fordi du skrev dig op til MitLivMed.

Du er nu på listen til tidlig adgang, når vi åbner i starten af 2026.

---

Hvad er MitLivMed?

Et modereret fællesskab, hvor mennesker med bipolar deler levede erfaringer. Ikke terapi. Ikke medicinsk rådgivning. Bare mennesker, der deler det, der hjælper dem med at leve godt med bipolar.

---

Hvad sker der nu?

Vi sender dig besked, når vi er klar til at åbne dørene. Indtil da: ingen spam, kun opdateringer når der er noget at fortælle.

Hvis du har spørgsmål, er du velkommen til at skrive til os på hello@mitlivmed.dk.

Tak fordi du er med fra starten.

Varme hilsner,
Holdet bag MitLivMed

---

Har du brug for hjælp nu?

MitLivMed er ikke krisestøtte. Hvis du har det svært lige nu, så ræk ud:

• Livslinien: 70 201 201 (alle dage)
• Psykiatrifondens Rådgivning: psykiatrifonden.dk
• Akut fare: Ring 112

---

Du modtager denne mail, fordi du skrev dig op til MitLivMed.
Fortryder du? [Afmeld her]
```

---

## English Version

**From:** MitLivMed <hello@mitlivmed.dk>  
**Subject line options (pick one):**
1. `You're on the list ✓`
2. `Thanks for signing up`
3. `See you in 2026`

**Preview text:** We're excited to share MitLivMed with you.

---

### Email Body (English)

```
Hi,

Thanks for signing up for MitLivMed.

You're now on the list for early access when we open in early 2026.

---

What is MitLivMed?

A moderated community where people living with bipolar share lived experiences. Not therapy. Not medical advice. Just people sharing what helps them live well with bipolar.

---

What happens now?

We'll let you know when we're ready to open the doors. Until then: no spam, just updates when there's something worth sharing.

If you have any questions, feel free to reach out at hello@mitlivmed.dk.

Thanks for being here from the start.

Warm regards,
The MitLivMed team

---

Need support now?

MitLivMed is not crisis support. If you're struggling right now, please reach out:

• Livslinien (DK): 70 201 201
• International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/
• In immediate danger: Call your local emergency number

---

You're receiving this email because you signed up for MitLivMed.
Changed your mind? [Unsubscribe here]
```

---

## Implementation Notes

### Email Provider Setup

**If using ConvertKit:**
1. Create a Form linked to your Tally webhook
2. Set up an Automation: "When subscriber joins [MitLivMed Waitlist]" → Send email
3. Use their visual builder or paste HTML version

**If using Mailchimp:**
1. Create an Audience for waitlist signups
2. Connect Tally via Zapier: Tally submission → Add Mailchimp subscriber
3. Set up Welcome Email automation in Customer Journeys

**If using Loops:**
1. Native Tally integration available
2. Create a Transactional email for welcome
3. Trigger via API on form submission

### Tally → Email Connection Options

| Method | Complexity | Notes |
|--------|------------|-------|
| Tally → Zapier → Email provider | Low | Most flexible, works with any provider |
| Tally native integrations | Low | Mailchimp, ConvertKit, Notion supported |
| Tally webhook → Custom function | Medium | Full control, requires code |

### Personalization Fields

If you want to personalize, Tally can pass:
- `{{email}}` — their email address
- `{{interest}}` — "For myself" / "Supporting someone" / "Just curious"
- `{{signup_date}}` — when they signed up

Example personalized opening:
```
Hej,

Tak fordi du skrev dig op til MitLivMed — {{#if interest == "Supporting someone"}}det betyder meget, at du er her for nogen du holder af{{else}}vi glæder os til at dele fællesskabet med dig{{/if}}.
```

### Testing Checklist

- [ ] Email renders correctly on mobile
- [ ] Email renders correctly in Gmail, Outlook, Apple Mail
- [ ] Unsubscribe link works
- [ ] Crisis resources are visible and clickable
- [ ] Subject line displays fully on mobile (< 40 chars ideal)
- [ ] Preview text shows correctly
- [ ] From address is correct and deliverable
- [ ] SPF/DKIM configured so email doesn't go to spam

---

## Plain Text Version (Fallback)

Always include a plain text version for email clients that don't render HTML:

```
Hej,

Tak fordi du skrev dig op til MitLivMed.

Du er nu på listen til tidlig adgang, når vi åbner i starten af 2026.

HVAD ER MITLIVMED?

Et modereret fællesskab, hvor mennesker med bipolar deler levede erfaringer. Ikke terapi. Ikke medicinsk rådgivning. Bare mennesker, der deler det, der hjælper dem med at leve godt med bipolar.

HVAD SKER DER NU?

Vi sender dig besked, når vi er klar. Ingen spam, kun opdateringer når der er noget at fortælle.

Spørgsmål? Skriv til hello@mitlivmed.dk

---

HAR DU BRUG FOR HJÆLP NU?

MitLivMed er ikke krisestøtte. Hvis du har det svært:
- Livslinien: 70 201 201
- Akut fare: Ring 112

---

Afmeld: [unsubscribe_link]
```
