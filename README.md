📄 Projekt: Gym Hemsida med Login och Dashboard
1. Problem Statement
Problem

Gymmet saknar idag en central digital plattform där besökare, medlemmar och personal enkelt kan få information, logga in och hantera sitt träningsrelaterade innehåll. Många moment hanteras manuellt via reception, telefon eller e-post, vilket leder till ineffektivitet, dubbelbokningar och bristande överblick.

Varför behövs lösningen

En webbaserad lösning med:

en publik startsida (index),

en rollbaserad inloggning, och

en personlig dashboard

ger gymmet bättre struktur, förbättrad användarupplevelse och minskar administrativ belastning. Lösningen gör det möjligt för olika typer av användare att snabbt nå relevant information och funktionalitet.

2. Stakeholders
1. Guest (Besökare)

Ej inloggad användare

Vill se information om gymmet, träningsutbud, öppettider och kontaktuppgifter

2. Client / Member (Medlem)

Inloggad användare

Vill boka och avboka pass, se sina bokningar och få information via dashboarden

3. Trainer (Tränare)

Anställd med tränarroll

Vill se sitt schema, skapa eller hantera pass och se deltagarlistor

4. Staff (Anställd)

Reception eller administrativ personal

Vill hantera pass, se bokningar och ge support till medlemmar

5. Admin (Administratör)

Systemägare

Vill hantera användarroller, innehåll och övergripande inställningar

3. Kravlista
Funktionella krav (minst 5)

F1. Systemet ska erbjuda rollbaserad inloggning (Klient, Tränare, Anställd).
F2. Efter inloggning ska användaren omdirigeras till rätt dashboard baserat på roll.
F3. Klienter ska kunna se och boka träningspass.
F4. Klienter ska kunna avboka bokade pass inom tillåten tidsgräns.
F5. Tränare/Anställda ska kunna skapa och redigera träningspass.
F6. Tränare ska kunna se deltagarlista för sina pass.
F7. Dashboarden ska visa relevant information och notiser beroende på roll.
F8. Användare ska kunna logga ut och återgå till startsidan.

Icke-funktionella krav (minst 3)

NF1. Usability
Systemet ska vara lätt att använda med tydlig navigation och logiska flöden (max 3–4 klick till viktiga funktioner).

NF2. Accessibility
Webbplatsen ska vara tillgänglig via tangentbord, använda korrekta labels, rubrikhierarki och semantisk HTML.

NF3. Performance
Sidor ska ladda snabbt och vara optimerade för vanliga enheter (desktop och mobil).

4. Prioritering (MoSCoW)
Must Have

F1 Rollbaserad inloggning

F2 Rätt dashboard per roll

F3 Boka pass

F4 Avboka pass

F8 Logga ut

NF1 Usability

NF2 Accessibility

Should Have

F5 Skapa/ändra pass

F6 Deltagarlista

F7 Dashboard-notiser

NF3 Performance

Could Have

Kalenderexport (Google/Apple)

E-postbekräftelser vid bokning

“Kom ihåg mig”-funktion

Won’t Have:

Onlinebetalning

Fakturering

Avancerad statistik/rapportering

5. Use Case – Rollbaserad inloggning
Use Case Name

Rollbaserad inloggning och omdirigering till dashboard

Actor

Användare (Klient, Tränare eller Anställd)

Preconditions

Användaren befinner sig på login-sidan

Användaren har ett registrerat konto

Login-formuläret innehåller fält för e-post och lösenord

En roll kan väljas via roll-väljare

Main Flow

Användaren öppnar login-sidan.

Systemet visar rollväljare samt inloggningsformulär.

Användaren väljer roll.

Användaren fyller i e-post och lösenord.

Användaren trycker på “Logga in”.

Systemet validerar inmatningen.

Systemet verifierar inloggningen.

Systemet skapar en inloggad session.

Systemet omdirigerar användaren till rätt dashboard baserat på vald roll.

Alternate Flows

A1: Ogiltig e-post eller tomt fält
Systemet visar felmeddelande och stoppar inloggning.

A2: Fel lösenord
Systemet visar felmeddelande utan att avslöja vilken del som är fel.

A3: Ingen roll vald
Systemet kräver att användaren väljer roll innan inloggning.

A4: Saknar behörighet för vald roll
Systemet visar felmeddelande och erbjuder att byta roll.

Postconditions

Vid lyckad inloggning är användaren inloggad och befinner sig på korrekt dashboard.

Vid misslyckad inloggning förblir användaren på login-sidan och ingen session skapas.

6. Change Notes (Ändringshistorik)
Version	Datum	Ändring
1.0	2026-02-24	Första version av krav- och use case-dokument
1.1	2026-02-24	Tillägg av rollbaserad dashboard
1.2	2026-02-24	Förtydligade icke-funktionella krav
1.3	2026-02-24	Justering av use case-flöde baserat på implementation