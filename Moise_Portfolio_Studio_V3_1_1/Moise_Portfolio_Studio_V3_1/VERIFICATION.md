> V3.1.1 update: the four requested metadata/counter corrections are applied. See PATCH_NOTES_V3_1_1.md for the current file-preservation record. Earlier verification describes the V3.1 baseline.

# Verification — Studio Edition V3.1

Checked 31 October 2026.

- All ten supplied project HTML documents are byte-for-byte identical after installation. Their hashes are recorded in verification/project-files.json.
- Work, CV, Contact and About HTML match the approved Studio version after removing only the header number spans. About's photo treatment is changed in CSS.
- Both homepage selected-project areas match the previous version exactly.
- Static checks found no missing local references, broken fragment targets, duplicate IDs or JavaScript syntax errors. All 22 pages have one H1. Shared scripts and six inline JavaScript blocks were checked.
- Browser checks covered all 22 pages at widths 320, 390, 768 and 1440. All 88 viewport-frame cases passed without horizontal document overflow or broken loaded images.
- The restored Rubik's Cube was exercised in both languages at 390px: each of the six turns changed state and its inverse restored state. Scramble, undo and reset also passed.
- The restored project navigation returned to the Studio Projects page and home.
- Every supplied project's language-switch URL resolves to its matching opposite-language page.
- Nine language-policy tests passed, including mixed browser languages and remembered preferences.
- The final browser error log contained no application errors.
- The homepage portrait placement and natural-colour About portrait were visually checked.

The responsive checks use browser viewport frames rather than physical phones. Real-device and additional-browser testing remain useful before publication. No email, telephone call or deployment was performed. The supplied HTML is intentionally preserved, including its existing copy and inline implementation.
