elements.legendary_energy = {
                        name: "legendary energy",
                        color: "#13d649",
	                behavior: [
        "XX|XX|XX",
        "XX|EX:90>plasma,plasma,plasma,plasma,radon,radon,radon,radon,radon,radon,molten_iron,molten_uranium,legendary_energy AND CH:light|XX",
        "XX|XX|XX",
    ],
                        temp: 99999999700,
                        category: "energy",
                        state: "gas",
                        density: 1000,
                        hardness: 1,
                        excludeRandom: true,
                        noMix: true,
			reactions: {
                                "magma": { "elem1": "armageddon", "elem2": null },
                                "void": { "elem1": "light", "elm2": null },
          },
},

elements.liquid_legend = {
                        name: "liquid legend",
		        color: "#13d644",			
                        behavior: [
                        "XX|XX|XX",
                        "M2|EX:15>radon,radon,legendary_energy,liquid_legend%0.4 AND DL%0.2|M2",
                        "M1|M1|M1",
			],
                        temp: 300,
                        category: "liquids",
                        state: "liquid",
                        density: 2000,
                        excludeRandom: true,
			reactions: {
                                "magma": { "elem1": "armageddon", "elem2": null },
                         	"void": { "elem1": "light", "elm2": null },
	                },
             }
});
