function Userdata() {
    fetch("https://dummyjson.com/recipes")
    .then(function(rawData){
        console.log(rawData);

        return rawData.json();
    })
    .then((data)=> {
         console.log("Final Data Step 1", data);
      console.log("Final Data Step 2", data.recipes);
       data.recipes.forEach((recipes) => {
    RenderUI(recipes);
});
    })
    .catch((err) => {
        console.log(err);
    })
}
 Userdata();
 function RenderUI(recipes){
     let card= document.querySelector(".card");
     card.innerHTML +=`<div class="group relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row">
        
        <div class="md:w-[40%] relative min-h-[300px] overflow-hidden">
            <img src=${recipes.image}
                 alt="Margherita Pizza" 
                 class="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105">
            
            <div class="absolute top-6 left-6 backdrop-blur-md bg-black/30 border border-white/20 text-white px-4 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase font-sans">
                Authentic Italian
            </div>

            <div class="absolute bottom-6 right-0 bg-white p-4 pr-8 rounded-l-full shadow-lg transform translate-x-2 group-hover:translate-x-0 transition-transform">
                <div class="flex items-center gap-3">
                    <span class="text-2xl font-bold font-sans text-orange-500">${recipes.servings}</span>
                    <span class="text-[10px] uppercase tracking-tighter text-gray-400 font-sans leading-none">Servings<br>Per Batch</span>
                </div>
            </div>
        </div>

        <div class="md:w-[60%] p-8 md:p-12 flex flex-col">
            
            <div class="mb-8">
                <div class="flex items-center gap-2 mb-2">
                    <div class="h-[1px] w-8 bg-orange-500"></div>
                    <span class="text-xs font-sans text-orange-500 uppercase tracking-widest font-bold">${recipes.difficulty}</span>
                </div>
                <h1 class="text-4xl md:text-5xl text-gray-900 leading-tight">Classic <br> ${recipes.name}</h1>
            </div>

            <div class="flex flex-wrap gap-2 mb-10">
                
                ${recipes.ingredients.map((ingredients) =>
                    `  <span class="font-sans text-[11px] bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100">${ingredients}</span>`
                ).join("")}

            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="relative pl-8">
                    <span class="step-number absolute left-0 -top-2 text-4xl font-black font-sans">${recipes.id}</span>
                    <h4 class="text-sm font-bold text-gray-800 font-sans mb-1">Preheat & Prep</h4>
                    <p class="text-xs text-gray-500 leading-relaxed italic">Set oven to 475°F (245°C). Roll out the artisan dough.</p>
                </div>
                <div class="relative pl-8">
                    <span class="step-number absolute left-0 -top-2 text-4xl font-black font-sans">02</span>
                    <h4 class="text-sm font-bold text-gray-800 font-sans mb-1">Assembly</h4>
                    <p class="text-xs text-gray-500 leading-relaxed italic">Layer the sauce, mozzarella, and fresh basil leaves.</p>
                </div>
            </div>

            <div class="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <div class="text-center">
                        <span class="block text-lg font-bold text-gray-900 font-sans">35</span>
                        <span class="text-[9px] uppercase text-gray-400 font-sans tracking-widest">Mins</span>
                    </div>
                    <div class="h-8 w-[1px] bg-gray-200"></div>
                    <div class="text-center">
                        <span class="block text-lg font-bold text-gray-900 font-sans">300</span>
                        <span class="text-[9px] uppercase text-gray-400 font-sans tracking-widest">Cals</span>
                    </div>
                </div>

                <button class="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-bold font-sans uppercase tracking-[0.2em] hover:bg-orange-500 transition-colors duration-300 shadow-xl shadow-gray-200">
                    Print Recipe
                </button>
            </div>
        </div>
    </div>
`
 }