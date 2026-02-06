// script.js

// Parts of speech data
const partsData = {
    ngan: {
        title: "Ngan (Noun)",
        icon: "fa-file-signature",
        definition: "A noun (ngan) in Tausug is a word that names a person, place, thing, or idea. Nouns can function as the subject or object in a sentence.",
        examples: [
            {
                tausug: "In <span class='tausug-word'>bata'</span> nagdula ha sulod.",
                english: "The <span class='english-word'>child</span> is playing inside."
            },
            {
                tausug: "Nagkaun kami sin <span class='tausug-word'>kān</span>.",
                english: "We ate some <span class='english-word'>rice</span>."
            },
            {
                tausug: "In <span class='tausug-word'>Jolo</span> iban <span class='tausug-word'>Zamboanga</span> duwa sin manga lugar ha Pilipinas.",
                english: "<span class='english-word'>Jolo</span> and <span class='english-word'>Zamboanga</span> are two places in the Philippines."
            }
        ],
        usage: [
            "Nouns can be proper (names of specific people, places) or common (general items)",
            "Nouns can be marked for case (subject, object, oblique)",
            "Nouns can be singular or plural (often indicated by 'manga' before the noun)"
        ]
    },
    ganti: {
        title: "Ganti'ngan (Pronoun)",
        icon: "fa-user",
        definition: "A pronoun (ganti'ngan) is a word that takes the place of a noun. Tausug pronouns indicate person (first, second, third), number (singular, plural), and sometimes inclusivity.",
        examples: [
            {
                tausug: "<span class='tausug-word'>Aku</span> magadtu ha iskul.",
                english: "<span class='english-word'>I</span> am going to school."
            },
            {
                tausug: "Hinangun sin <span class='tausug-word'>kita</span> in pagkaun.",
                english: "<span class='english-word'>We</span> (inclusive) prepared the food."
            },
            {
                tausug: "In libru kay' <span class='tausug-word'>iya</span>.",
                english: "The book is <span class='english-word'>his/hers</span>."
            }
        ],
        usage: [
            "Tausug has different pronouns for inclusive ('kita' - includes listener) and exclusive ('kami' - excludes listener) we",
            "Pronouns change form based on their grammatical function in the sentence",
            "Possessive pronouns are often formed by adding certain markers to the base pronoun"
        ]
    },
    piil: {
        title: "Pi'il (Verb)",
        icon: "fa-running",
        definition: "A verb (pi'il) expresses an action, occurrence, or state of being. Tausug verbs are marked for aspect (completed, ongoing, contemplated) rather than tense.",
        examples: [
            {
                tausug: "Si Ahmad <span class='tausug-word'>nagbasa</span> sin surat.",
                english: "Ahmad <span class='english-word'>read</span> the letter."
            },
            {
                tausug: "<span class='tausug-word'>Maghula'</span> kaw sin saging.",
                english: "<span class='english-word'>You will harvest</span> the bananas."
            },
            {
                tausug: "In manga bata' <span class='tausug-word'>nagdudula'</span> ha guwa.",
                english: "The children <span class='english-word'>are playing</span> outside."
            }
        ],
        usage: [
            "Tausug verbs use prefixes, infixes, and sometimes reduplication to indicate aspect",
            "The three main aspects are: perfective (completed), imperfective (ongoing), and contemplative (not yet begun)",
            "Verb focus (actor-focus vs. object-focus) is important in Tausug grammar"
        ]
    },
    papata: {
        title: "Papata (Adjective)",
        icon: "fa-pen-alt",
        definition: "An adjective (papata) describes or modifies a noun. Tausug adjectives usually follow the noun they modify and can indicate qualities like size, color, or state.",
        examples: [
            {
                tausug: "In tau <span class='tausug-word'>mataas</span> nagtindug ha luy.",
                english: "The <span class='english-word'>tall</span> man is standing outside."
            },
            {
                tausug: "Biyayaan aku sin bunga <span class='tausug-word'>mahunit</span>.",
                english: "I was given a <span class='english-word'>sweet</span> fruit."
            },
            {
                tausug: "Kita' in manga bata' <span class='tausug-word'>masipag</span>.",
                english: "Our children are <span class='english-word'>hardworking</span>."
            }
        ],
        usage: [
            "Adjectives typically follow the nouns they modify",
            "Some adjectives can be intensified with reduplication or specific markers",
            "Comparative and superlative forms are created with specific words rather than suffix changes"
        ]
    },
    kahantang: {
        title: "Kahantang (Adverb)",
        icon: "fa-clock",
        definition: "An adverb (kahantang) modifies a verb, adjective, or another adverb. It provides information about time, manner, place, frequency, or degree.",
        examples: [
            {
                tausug: "Siya <span class='tausug-word'>marayaw</span> magtindug.",
                english: "He stands <span class='english-word'>well</span>."
            },
            {
                tausug: "<span class='tausug-word'>Kasusu'</span> aku makaan ha restaurant.",
                english: "I eat at the restaurant <span class='english-word'>often</span>."
            },
            {
                tausug: "In bata' <span class='tausug-word'>mabiskay</span> nagdagan.",
                english: "The child ran <span class='english-word'>quickly</span>."
            }
        ],
        usage: [
            "Adverbs of time often come at the beginning or end of sentences",
            "Adverbs of manner typically follow the verb they modify",
            "Some adverbs are formed by adding specific markers to adjectives"
        ]
    },
    parbutangan: {
        title: "Parbutangan (Preposition)",
        icon: "fa-map-marker-alt",
        definition: "A preposition (parbutangan) shows the relationship between a noun (or pronoun) and other words in a sentence. It indicates location, direction, time, or manner.",
        examples: [
            {
                tausug: "In sapi nagkakà <span class='tausug-word'>ha</span> kātan.",
                english: "The cow is grazing <span class='english-word'>in</span> the field."
            },
            {
                tausug: "Miyadtu siya <span class='tausug-word'>pa</span> lungsod.",
                english: "He went <span class='english-word'>to</span> town."
            },
            {
                tausug: "In libro atua <span class='tausug-word'>sin</span> lamesa.",
                english: "The book is <span class='english-word'>on</span> the table."
            }
        ],
        usage: [
            "Common Tausug prepositions include 'ha' (in, at, on), 'sin' (of, from), 'pa' (to, towards)",
            "Prepositions often combine with pronouns to form contractions",
            "Some prepositions indicate both location and direction depending on context"
        ]
    },
    panglangkum: {
        title: "Panglangkum (Conjunction)",
        icon: "fa-link",
        definition: "A conjunction (panglangkum) connects words, phrases, or clauses. Tausug conjunctions can be coordinating (connecting equal elements) or subordinating (connecting dependent clauses).",
        examples: [
            {
                tausug: "In babai <span class='tausug-word'>iban</span> in lalaki nagkā hinang.",
                english: "The woman <span class='english-word'>and</span> the man are working."
            },
            {
                tausug: "Di' aku makatū <span class='tausug-word'>sabab</span> masakit in bukun ku.",
                english: "I cannot come <span class='english-word'>because</span> my body aches."
            },
            {
                tausug: "Kākun kaw magkaun, <span class='tausug-word'>wayruun</span> madtu pa iskul.",
                english: "If you eat, <span class='english-word'>then</span> go to school."
            }
        ],
        usage: [
            "'Iban' is the most common conjunction meaning 'and'",
            "'Sabab' means 'because' and introduces a reason",
            "'Kākun' means 'if' and introduces a conditional clause"
        ]
    },
    hurop: {
        title: "Hurop (Interjection)",
        icon: "fa-exclamation-circle",
        definition: "An interjection (hurop) is a word or phrase that expresses strong emotion or reaction. Interjections often stand alone or appear at the beginning of sentences.",
        examples: [
            {
                tausug: "<span class='tausug-word'>Ay</span>! Nalimutan ku in yan ku.",
                english: "<span class='english-word'>Oh</span>! I forgot my key."
            },
            {
                tausug: "<span class='tausug-word'>Astaghfirullah</span>! Subay kaw magsambahayang.",
                english: "<span class='english-word'>Astaghfirullah</span> (God forgive me)! You should pray."
            },
            {
                tausug: "<span class='tausug-word'>Masha'Allah</span>! Malingkat in bata'.",
                english: "<span class='english-word'>Masha'Allah</span> (God has willed it)! The child is beautiful."
            }
        ],
        usage: [
            "Interjections often express surprise, pain, joy, or other strong emotions",
            "Many Tausug interjections are Arabic in origin due to Islamic influence",
            "Interjections are usually followed by an exclamation mark"
        ]
    }
};

// DOM elements
const buttons = document.querySelectorAll('.speech-btn');
const contentArea = document.getElementById('content-area');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the part of speech data
            const part = this.getAttribute('data-part');
            const data = partsData[part];
            
            // Display the selected part of speech
            displayPartOfSpeech(data);
        });
        
        // Add hover effect to buttons
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-5px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
});

// Function to display part of speech content
function displayPartOfSpeech(data) {
    // Generate HTML content for the selected part
    let contentHTML = `
        <h1 class="part-title"><i class="fas ${data.icon}"></i> ${data.title}</h1>
        <p class="definition">${data.definition}</p>
        <div class="examples">
    `;
    
    // Add examples
    data.examples.forEach(example => {
        contentHTML += `
            <div class="example">
                <div class="example-title">Tausug Example:</div>
                <div class="example-text">${example.tausug}</div>
                <div class="example-title">English Translation:</div>
                <div class="example-text">${example.english}</div>
            </div>
        `;
    });
    
    // Add usage notes
    contentHTML += `<div class="usage-title example-title">Usage Notes:</div>`;
    contentHTML += `<div class="usage">`;
    
    data.usage.forEach(note => {
        contentHTML += `
            <div class="usage-item">
                <h4><i class="fas fa-check-circle" style="color: #26d0ce; margin-right: 8px;"></i> Note</h4>
                <p>${note}</p>
            </div>
        `;
    });
    
    contentHTML += `</div>`;
    
    // Update content area
    contentArea.innerHTML = contentHTML;
}
