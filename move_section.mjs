import fs from 'fs';

const filePath = '/Users/user/testbasedweb/test-based-nutrition-ui/src/pages/treatments/SportsPerformance.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// The section we want to move starts with "{/* SECTION 3 — EXPLORE YOUR PATHWAY */}"
const startMarker = "{/* SECTION 3 — EXPLORE YOUR PATHWAY */}";
const endMarker = "        {/* SECTION 7.5 — THE SCIENCE BEHIND PERFORMANCE */}";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found");
  process.exit(1);
}

// Extract the chunk to move
const chunk = content.substring(startIndex, endIndex);

// Remove the chunk from its original location
content = content.substring(0, startIndex) + content.substring(endIndex);

// Find the insertion point
const insertMarker = "{/* SECTION 2 — SPECIALIST LEADS */}";
const insertIndex = content.indexOf(insertMarker);

if (insertIndex === -1) {
  console.error("Insert marker not found");
  process.exit(1);
}

// Update the chunk's title to SECTION 2 and the specialist's to SECTION 3
let updatedChunk = chunk.replace("{/* SECTION 3 — EXPLORE YOUR PATHWAY */}", "{/* SECTION 2 — EXPLORE YOUR PATHWAY */}\n        <div className=\"pt-8 lg:pt-10\"></div>");
let insertContentRest = content.substring(insertIndex).replace("{/* SECTION 2 — SPECIALIST LEADS */}", "{/* SECTION 3 — SPECIALIST LEADS */}");

// Insert the chunk
const finalContent = content.substring(0, insertIndex) + updatedChunk + insertContentRest;

fs.writeFileSync(filePath, finalContent);
console.log("Move successful");
