# AGENTS.md — Vocabulary Garden

## 1. Project Overview

Vocabulary Garden is a lightweight, interactive English vocabulary learning website.

The goal is to provide reusable flashcards that help users memorize English words through active recall.

The project must be easy to maintain and extend. AI coding agents should be able to add new vocabulary or categories by following this document without redesigning the website.

## 2. Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- JSON for vocabulary data
- GitHub Pages for deployment

Do not introduce React, Vue, backend services, databases, or third-party libraries unless explicitly requested.

The entire project must work as a static website.

## 3. Project Structure

```text
vocabulary-garden/
├── AGENTS.md
├── README.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── data/
    └── vocabulary.json
```

File responsibilities:

- `index.html`: Website structure and accessible controls.
- `css/style.css`: All visual styling and responsive layouts.
- `js/app.js`: Flashcard rendering, navigation, filtering, and interaction logic.
- `data/vocabulary.json`: The single source of truth for vocabulary content.
- `README.md`: Project overview, local preview instructions, and deployment guidance.

Do not create unnecessary files or duplicate existing logic.

## 4. Visual Design Rules

The website should follow a calm, minimal, and friendly design.

- Background: warm cream (`#FAF8F4`)
- Primary color: muted lavender (`#A99ACB`)
- Accent color: sage green (`#A8BFA5`)
- Text color: dark charcoal (`#333333`)
- Use rounded cards, soft shadows, and generous spacing.
- Maintain consistent typography, margins, and button styles.
- The layout must work on desktop and mobile.
- All cards must share the same visual design.
- Do not use animations that distract from learning.

## 5. Vocabulary Data Schema

Store all vocabulary entries in `data/vocabulary.json` as a JSON array.

Each vocabulary entry must contain:

```json
{
  "id": "academic-resilient",
  "word": "resilient",
  "partOfSpeech": "adjective",
  "meaning": "有韌性的；適應力強的",
  "example": "She remained resilient despite difficulties.",
  "category": "academic"
}
```

Required fields:

| Field | Rule |
|---|---|
| id | Unique lowercase kebab-case identifier |
| word | English word or phrase |
| partOfSpeech | English part of speech |
| meaning | Traditional Chinese definition |
| example | Natural, grammatically correct English sentence |
| category | Lowercase category identifier |

Initial categories:

- `daily`: Daily English
- `academic`: Academic English
- `technology`: Technology English

Data rules:

1. All six fields are mandatory.
2. IDs must be unique.
3. Do not create duplicate words within the same category, ignoring capitalization.
4. Use Traditional Chinese for definitions.
5. Example sentences must demonstrate the meaning of the word.
6. The JSON file must remain syntactically valid.
7. Preserve existing entries when adding new ones.
8. Do not invent unusual meanings or unnatural example sentences.

## 6. Page Structure

The website contains one main page with the following sections:

1. **Header** — Website title and short introduction.
2. **Category Selector** — Filter vocabulary by category.
3. **Flashcard Area** — Display one vocabulary card at a time.
4. **Navigation Controls** — Previous and next buttons.
5. **Progress Indicator** — Show the current card number and total cards.

Flashcard behavior:

- Front: Display the English word.
- Back: Display the word, part of speech, Traditional Chinese meaning, and example sentence.
- Clicking or tapping the card flips it.
- Flipping must also support keyboard interaction.
- Changing cards resets the card to its front side.
- Changing categories resets navigation to the first card.
- The progress indicator must reflect the currently selected category.
- The previous and next buttons must not navigate beyond the available cards.
- Show a friendly message when no vocabulary is available.

## 7. Coding Rules

- Use semantic HTML.
- Keep HTML, CSS, JavaScript, and data in separate files.
- Prefer simple, readable JavaScript functions.
- Reuse the existing flashcard component rather than creating individual HTML pages for words.
- Do not hardcode vocabulary content in HTML or JavaScript.
- Load vocabulary dynamically from `data/vocabulary.json`.
- Avoid inline CSS and unnecessary dependencies.
- Provide accessible button labels and visible keyboard focus states.
- Do not break existing features when making changes.

## 8. Adding New Vocabulary

When asked to add new words, the AI agent must:

1. Read this `AGENTS.md`.
2. Inspect the existing `data/vocabulary.json`.
3. Identify the requested category.
4. Check for duplicate IDs and vocabulary entries.
5. Add entries using the required schema.
6. Preserve all existing vocabulary.
7. Validate the JSON structure.
8. Check that the new entries appear correctly in the website.
9. Summarize the changes made.

New vocabulary should not require changes to `index.html`, `css/style.css`, or `js/app.js` unless a new feature is explicitly requested.

## 9. Adding New Categories

When asked to create a new category, the AI agent must:

1. Choose a short lowercase category identifier.
2. Add vocabulary entries using the existing data schema.
3. Update the category display-name mapping in `js/app.js`.
4. Ensure the category selector includes the new category.
5. Reuse the existing flashcard layout and interaction logic.
6. Test category switching and card navigation.

Do not create a new HTML page for each category.

## 10. Testing and Validation

Before completing any task, verify:

- The website loads without JavaScript errors.
- Vocabulary JSON is valid.
- All required fields exist and IDs are unique.
- Flashcards flip correctly.
- Previous and next navigation works.
- Category filtering works.
- Progress indicators display accurate values.
- The website remains usable on mobile.
- Vocabulary content is readable and correctly displayed.
- All existing functionality still works.

Because vocabulary data is loaded using `fetch()`, local testing should use a development HTTP server rather than opening `index.html` directly with the `file://` protocol.

For deployment, verify that the published GitHub Pages URL can load the JSON file successfully.

## 11. AI Agent Workflow

For every development request:

1. **Read** — Review `AGENTS.md` and relevant project files.
2. **Plan** — Identify which files need modification.
3. **Implement** — Make the smallest reasonable changes.
4. **Validate** — Check data correctness and existing functionality.
5. **Report** — Explain modified files and validation results.

Do not redesign unrelated parts of the website.

When requirements are unclear, prefer the existing design conventions and simple implementations.

## 12. Extensibility Goals

The architecture should support future features such as:

- Vocabulary search
- Randomized practice
- Learned/unlearned word tracking
- Additional vocabulary categories
- More language-learning content

These features are optional and should not be implemented unless requested.

The primary goal is to keep the vocabulary system consistent, reusable, and easy for future AI agents to extend.