# FAI Fleet Recorder

Voice-dictated fleet inspection logging for iPhone. Walk the truck lot, dictate each entry, export a formatted Excel file when you're done. Works fully offline once installed.

**App:** https://intrud3r.github.io/fai-fleet-recorder/

## Setup (one time)

1. Open the app URL above in **Safari** on your iPhone (must be Safari, not another browser or the Files app).
2. Tap the **Share** button, then **Add to Home Screen**.
3. Launch it from the Home Screen icon from now on — it opens full-screen like a native app and works with zero signal once loaded.

## Recording a truck

1. Tap the input field, tap the keyboard's **mic key**, and say the **truck number** alone (e.g. "4123"). Tap Go.
2. Tap the mic again and say **"FAI"** followed right away, in the same breath, by the **date** (e.g. "FAI August 2027", "FAI 10/26", or "FAI 1027"). "FAI" is just a verbal cue — it never appears typed in the field. Tap Go.
3. *(Optional)* Tap the mic and say **"notes"** then the note text, or say both together in one breath (e.g. "notes left rear tire low"). Tap Go.
4. **Tap Go with the field empty** to save the entry as a new line. You'll see `Recorded`.

You can also say everything in one continuous breath without pausing between taps (e.g. "657437 fai 1227") — the app scans the whole thing for the cue words wherever they land, so this works the same as separate taps.

Saying "Next" out loud after everything else also commits the entry, if you prefer — but it's optional, not required.

## Notes

- Say **"notes"** alone as a cue, then the note text next — or combine them: "notes left rear tire low".
- Notes are optional and can be added any time before you commit the entry.

## Duplicate trucks

- If you commit an entry for a truck number that's already recorded, you'll be asked: **"Replace the previous entry or create another record?"**
- Reply **"replace"** to overwrite the existing entry, or **"new"** / **"another"** to keep both.

## Other voice commands

| Say this | It does this |
|---|---|
| "Show list" | Scrolls to the recorded-trucks table |
| "Delete last truck" | Removes the most recently recorded entry |
| "Edit truck 4123" | Loads that truck back into the entry field — say FAI/date/notes, then Go (empty) to re-save |
| "Count trucks" | Reports how many trucks are recorded |
| "Export" | Generates and downloads the .xlsx file |

## On-screen buttons

- **Delete** (next to each row) — removes just that one entry.
- **Export .xlsx** — downloads `FAI_Inspection_YYYY-MM-DD.xlsx` with a bold header row, frozen top row, and one row per truck.
- **New Report** — clears the current list to start a fresh report. If anything hasn't been exported yet, it asks you to export first, clear anyway, or cancel — so you can't accidentally lose data.

## Data & privacy

- Entries are stored only in the phone's local storage — nothing is ever sent anywhere.
- The app code is public (required for free GitHub Pages hosting), but no inspection data is included in that.

## If something seems out of date

After any app update, the phone may keep showing an old cached version. Force a clean refresh:

1. Remove the app icon from your Home Screen.
2. Settings → Safari → Advanced → Website Data → find `intrud3r.github.io` → delete it.
3. Fully close Safari (swipe it away, don't just background it).
4. Re-open the app URL in Safari, then Add to Home Screen again.
