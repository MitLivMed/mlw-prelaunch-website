# Landing Page:

## Vi bygger noget til det, der kommer efter: 

MitLivMed er et digitalt fællesskab, hvor mennesker med bipolar affektiv lidelse kan dele deres historier og erfaringer, skræddersyet til dig. Ikke medicinsk rådgivning. Ikke krisestøtte. Bare mennesker, der deler det, der hjælper dem med at leve godt med bipolar.

## CTA: Skriv dig op til tidlig adgang

MitLivMed åbner i starten af 2026

##  Kan du genkende det?(replaced with caurosel \- example code)

“Jeg er træt af at forklare mig til folk, der ikke forstår.”

“Det er hverdagen, jeg kæmper med; ikke kun episoderne.”

“Råd på internettet er højlydt, modstridende og ofte usikre.”

“Jeg vil gerne have håb; men ikke den type, der føles falsk.”

“Nogle gange har jeg bare brug for at vide, at andre har stået her før.”

## Fakta bag følelserne: (replaced with caurosel \- example code)

- 42-51% af psykiatriske patienter får ikke opfølgning inden for 30 dage efter udskrivelse — men den første uge hjemme er, når selvmordsrisikoen er højest. Tidlig kontakt reducerer risikoen med 18%.[^1]  
- Peer-støtte forbedrer personlig recovery og reducerer angst — effekter der varer mindst 6-9 måneder. Cirka 1 ud af 5 opnår meningsfuld bedring udover hvad standardbehandling alene giver.[^2]

  (UI Note: This could be a carousel or something)

## Hvad er MitLivMed?

MitLivMed er et modereret digitalt fællesskab for mennesker med bipolar. Her deler vi levede erfaringer gennem videoer og indlæg med fokus på det der faktisk har hjulpet os i hverdagen.

Det er til dig, der savner støtte og spejling efter diagnosen. Måske leder du efter håb, genkendelse, eller bare nogen der har stået der før.

Du behøver ikke dele noget selv. Du kan følge med, lære, reflektere — eller bidrage, hvis du har lyst. Du bestemmer.

Alt indhold bliver gennemgået, og fællesskabet er modereret og guidet af fagpersoner, så din oplevelse føles trygt med respekt for dit privatliv.

Pårørende er også velkomne. Partnere, familie og venner til mennesker med bipolar kan deltage, så længe de følger fællesskabets retningslinjer.

## Hvad er MitLivMed ikke?

- **Ikke terapi eller behandling.** MitLivMed er et fællesskabs- og refleksionsværktøj. Det erstatter ikke din behandler.

- **Ikke medicinsk rådgivning.** Vi kan ikke vurdere din situation, stille diagnoser eller anbefale medicin.

- **Ikke krisestøtte.** Vi kan ikke hjælpe i akutte kriser. Hvis du har brug for hjælp nu, så find den her:

`[Button: Har du brug for hjælp?]` → triggers modal

---

### Crisis Modal Spec (for developer)

**Modal Header:** Har du brug for hjælp nu?

#### Tier 1: Akut (high visibility, large buttons)

| Label | Action | Note |
|-------|--------|------|
| Ring 112 | `tel:112` | Akut fare |
| Ring Livslinien | `tel:70201201` | Krise og selvmordstanker |

Microcopy under Livslinien: "Alle dage. Chat i åbningstid på livslinien.dk"

#### Tier 2: Tal med nogen i dag (cards/smaller buttons)

| Ressource | Telefon | Link | Målgruppe |
|-----------|---------|------|-----------|
| Psykiatrifondens Rådgivning | — | psykiatrifonden.dk | Angst, depression, pårørende |
| SIND Rådgivning | — | sindraadgivning.dk | Dig og pårørende |
| DepressionsLinien | 33 12 47 74 | depressionsforeningen.dk | Voksne 18+ med depression/bipolar |
| headspace | — | headspace.dk | Unge 12-25, gratis og anonymt |
| BørneTelefonen | 116 111 | bornetelefonen.dk | Børn og unge, gratis og anonymt |

#### Tier 3: Find lokal hjælp (text links)

- **Sundhedsstyrelsens "Akut hjælp"** — samler relevante tilbud inkl. akutte muligheder
- **Lægevagten** — hjælp udenfor egen læges åbningstid (nummer afhænger af region)

#### Modal Behavior

- **Trigger:** Button in "Hvad er MitLivMed ikke?" section
- **Dismiss:** X icon top-right + click outside modal
- **Mobile:** Full-screen takeover, large touch targets on Tier 1 buttons
- **Accessibility:** Focus trap, escape key closes, `tel:` links work on mobile

# 

# ABOUT Page

## Bygget på personlige erfaringer 

MitLivMed er skabt ud fra et behov, jeg selv stod i.

Jeg hedder **Jesper Ohrt Juel Jensen**, og jeg er medgrundlægger.

For nogle år siden blev jeg ramt af en depression, der vendte alt på hovedet. Jeg ledte efter andre med bipolar, som jeg kunne spejle mig i. Ikke for at få råd eller diagnoser, bare for at se, at man godt kan få et godt liv alligevel.

Men det, jeg fandt online, var enten for lidt eller for meget støj.

Et par kendte ansigter, og ting der føltes mere kaotiske end hjælpsomme. Det gav mig ikke håb. Det gjorde mig mest bare mere alene.

Jeg manglede noget andet.

Jeg havde brug for at møde:

* nogen der har prøvet det, og kan sige højt, hvad der faktisk hjalp

* nogen der står i det nu, så man ikke føler sig alene

* nogen der kan give håb, uden at det bliver “positivt på kommando”

Det blev startskuddet.

Derfor bygger vi **MitLivMed** som et modereret digitalt fællesskab for mennesker med bipolar, hvor du kan møde andres erfaringer, når du har brug for det. Det handler om det, der kommer efter: **hverdagen, relationerne, rutinerne, og håbet der føles ægte**.

## Ofte stillede spørgsmål

Hvad er MitLivMed?  
Et modereret digitalt fællesskab, hvor mennesker med bipolar deler levede erfaringer via videoer og indlæg.

Hvem er det til?  
Til dig med bipolar, som savner støtte og spejling i hverdagen efter diagnosen.

Hvad får jeg ud af det?  
Håb, genkendelse og konkrete erfaringer fra andre, der har stået der før.

Er det terapi eller behandling?  
Nej. MitLivMed er ikke terapi og erstatter ikke din behandler.

Giver I medicinsk rådgivning?  
Nej. Ingen råd om medicin, diagnoser eller kliniske beslutninger.

Er det krisestøtte?  
Nej. Ved krise: Livslinien 70 201 201\.

Skal jeg dele noget selv?  
Nej. Du vælger selv, om du vil dele, kommentere eller bare følge med.

Hvordan undgår I skadeligt indhold?  
Indhold bliver gennemgået, og fællesskabet er modereret og guidet.

Er MitLivMed anonymt?  
Vi bygger det til at føles trygt, detaljer om profil og privathed kommer ved lancering.

Hvornår åbner det?  
Tidlig adgang åbner i starten af 2026\.

Hvordan får jeg tidlig adgang?  
Skriv dig op på landingssiden, så får du besked først.

Hvad sker der, efter jeg har skrevet mig op?  
Du får lejlighedsvise opdateringer (ingen spam). Når vi lancerer, er du først i køen.

Kan pårørende deltage?  
Ja. Partnere, familie og venner til mennesker med bipolar er velkomne, men forbeholdt, at retningslinjer følges.

[^1]: Stein BD, et al. "The effectiveness of discharge planning for psychiatric inpatients with varying levels of pre-admission engagement in care." *PMC*, 2021\. [https://pmc.ncbi.nlm.nih.gov/articles/PMC8695636/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8695636/)

[^2]: Forskning fra Copenhagen Research Center for Mental Health, Københavns Universitet ved Høgh Egmose C, et al. "The Effectiveness of Peer Support in Personal and Clinical Recovery: Systematic Review and Meta-Analysis." *Psychiatric Services*, 2023 Aug;74(8):847-858. [https://pubmed.ncbi.nlm.nih.gov/36751908/](https://pubmed.ncbi.nlm.nih.gov/36751908/)