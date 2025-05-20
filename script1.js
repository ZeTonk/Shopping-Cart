// Recipe Data (our Database)
const recipiesData = [
    {
        name : "Avocado Toast with Poached Egg",
        time : "15 Minutes",
        servings: 1,
        ingredients : [
            "1 slice of whole grain bread",
            "1/2 ripe avocado",
            "1 egg",
            "1 tsp vinegar",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)",
            "1/2 lemon (for juice)"
        ] ,
        steps:[
            "Toast the bread until golden and firm.",
            "While the bread is toasting  halve the avocado and scoop the flesh into a bowl. Add a squeeze of lemon  salt  and pepper. Mash with a fork to your desired consistency.  ",
            "To poach the egg  bring a small pot of water to a simmer. Add vinegar. Create a gentle whirlpool and crack the egg into the center. Cook for 3-4 minutes.",
            "Spread the mashed avocado onto the toast.",
            "Use a slotted spoon to remove the poached egg and place on top of the avocado toast.",
            "Sprinkle with additional salt  pepper  and red pepper flakes if desired."
        ]
    },

    // 2nd Repcipe
    {
        name:"Mushroom Risotto",
        time:"40 minutes",
        servings:4,
        ingredients : [
            "1 1/2 cups arborio rice",
            "4 cups vegetable broth, heated",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "8 oz mushrooms, sliced",
            "1/2 cup dry white wine",
            "2 tbsp olive oil",
            "2 tbsp butter",
            "1/2 cup grated Parmesan cheese",
            "2 tbsp fresh parsley, chopped",
            "Salt and pepper to taste"
        ],
        steps : [
            "Heat the olive oil in a large pan over medium heat. Add the onion and cook until soft and translucent, about 5 minutes.",
            "Add the garlic and mushrooms, cook until mushrooms are golden, about 5-7 minutes.",
            "Add the arborio rice and stir to coat with oil, toasting slightly for 1-2 minutes.",
            "Add the white wine and cook until absorbed.",
            "Begin adding the hot broth one ladle at a time, stirring frequently. Wait until each addition is absorbed before adding more.",
            "Continue this process until rice is creamy and al dente, about 20-25 minutes. You may not need all the broth.",
            "Remove from heat and stir in butter and Parmesan cheese.",
            "Season with salt and pepper, and garnish with fresh parsley before serving."
        ]
    },
    {
            name: "Berry Smoothie Bowl",
            time: "10 minutes",
            servings: 1,
            ingredients: [
                "1 cup mixed frozen berries",
                "1 frozen banana",
                "1/2 cup Greek yogurt",
                "1/4 cup almond milk",
                "1 tbsp honey or maple syrup",
                "Toppings: granola, fresh berries, sliced banana, chia seeds"
            ],
            steps: [
                "Add frozen berries, banana, Greek yogurt, almond milk, and sweetener to a blender.",
                "Blend until smooth but still thick. Add more almond milk if needed, but keep it spoonable rather than drinkable.",
                "Pour into a bowl and add your favorite toppings.",
                "Enjoy immediately with a spoon."
            ]
    },
    {
        name: "Homemade Kimchi",
        time: "1 hour + 3-5 days fermentation",
        servings: 8,
        ingredients: [
            "1 large Napa cabbage",
            "1/4 cup sea salt",
            "Water",
            "5-6 garlic cloves, grated",
            "1 tsp grated ginger",
            "1 tsp sugar",
            "2-3 tbsp Korean red pepper flakes (gochugaru)",
            "2 tbsp fish sauce (or soy sauce for vegan option)",
            "4 green onions, chopped",
            "1 small daikon radish, julienned"
        ],
        steps: [
            "Cut the cabbage into quarters and remove the core. Chop into 2-inch pieces.",
            "Place cabbage in a large bowl and sprinkle with salt. Pour in enough water to cover the cabbage. Let sit for 1-2 hours to wilt.",
            "Rinse the cabbage under cold water 3 times and drain well.",
            "In a small bowl, mix garlic, ginger, sugar, red pepper flakes, and fish sauce to create a paste.",
            "Add the paste to the cabbage along with green onions and radish. Mix thoroughly with clean hands (wearing gloves is recommended).",
            "Pack the mixture tightly into a clean jar, pressing down to remove air pockets.",
            "Seal the jar and let it ferment at room temperature for 3-5 days. Open the jar once a day to release gases and press the kimchi down.",
            "Once fermented to your liking, store in the refrigerator where it will continue to develop flavor for up to several months."
        ]

    },
    {
        name: "Mango Coconut Chia Pudding",
        time: "10 minutes + overnight setting",
        servings: 2,
        ingredients: [
            "1/4 cup chia seeds",
            "1 cup coconut milk",
            "1 tbsp honey or maple syrup",
            "1/4 tsp vanilla extract",
            "1 ripe mango, diced",
            "2 tbsp toasted coconut flakes",
            "Mint leaves for garnish (optional)"
        ],
        steps: [
            "In a medium bowl, whisk together chia seeds, coconut milk, sweetener, and vanilla extract.",
            "Cover and refrigerate overnight or for at least 4 hours.",
            "Stir well before serving to break up any clumps.",
            "Layer the chia pudding with diced mango in serving glasses or bowls.",
            "Top with toasted coconut flakes and mint leaves if using.",
            "Enjoy cold as a refreshing breakfast or dessert."
        ]
    }
];

// Get DOM Elements

const generateBtn = document.getElementById('generateBtn');
const recipieCard = document.getElementById('recepieCard');
const recepieName = document.getElementById('recepieName');
const prepTime = document.getElementById('prepTime');
const servings = document.getElementById('servings');
const ingredientsList = document.getElementById('ingredientsList');
const stepsList = document.getElementById('stepsList');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const toggleJsonBtn = document.getElementById('jsonDisplay');
const jsonDisplay = document.getElementById('jsonDisplay');