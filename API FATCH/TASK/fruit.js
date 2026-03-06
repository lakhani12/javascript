function Userdata() {
    fetch("https://corsproxy.io/?https://www.fruityvice.com/api/fruit/all")
    .then(function(rawData){
        console.log(rawData);

        return rawData.json();
    })
    .then((data)=> {
         console.log("Final Data Step 1", data);
      console.log("Final Data Step 2", data.fruit);
       data.forEach((fruit) => {
    RenderUI(fruit);
});
    })
    .catch((err) => {
        console.log(err);
    })
}
 Userdata();
 function RenderUI(fruit){
     let card= document.querySelector(".card")
     card.innerHTML +=`<div class="group relative max-w-sm w-full bg-white p-10 shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff] rounded-[3rem] overflow-hidden transition-all duration-700 hover:rounded-xl">
        
        <div class="absolute top-10 -right-4 text-[80px] font-bold text-stone-50 select-none pointer-events-none rotate-90 origin-top-right">
            FRUIT
        </div>

        <div class="animate-float absolute top-8 right-8 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold border-4 border-stone-100 shadow-xl z-10">
            #052
        </div>

        <div class="relative z-10">
            <h1 class="text-4xl font-light text-stone-800 tracking-tighter mb-1">
                <span class="font-bold text-orange-500"></span>${fruit.name}
            </h1>
            <p class="text-xs text-stone-400 uppercase tracking-[0.3em] mb-8 italic">${fruit.genus}</p>
        </div>

        <div class="h-[1px] bg-stone-100 w-full mb-8 relative">
            <div class="line-grow h-[1px] bg-orange-500 absolute top-0 left-0"></div>
        </div>

        <div class="space-y-8 relative z-10">
            
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <span class="text-[9px] text-stone-400 font-bold uppercase tracking-widest block mb-1"> Taxon Family</span>
                    <span class="text-sm text-stone-700 font-medium">${fruit.family}</span>
                </div>
                <div>
                    <span class="text-[9px] text-stone-400 font-bold uppercase tracking-widest block mb-1">Taxon Order</span>
                    <span class="text-sm text-stone-700 font-medium">${fruit.order}</span>
                </div>
            </div>

            <div class="bg-stone-50 p-6 rounded-2xl border border-stone-100 transition-colors group-hover:bg-orange-50/50">
                <div class="flex justify-between items-end mb-6">
                    <h2 class="text-xs font-bold text-stone-800 uppercase tracking-widest">Macro Analysis</h2>
                    <span class="text-2xl font-light text-orange-600">81 <span class="text-[10px] text-stone-400 uppercase">${fruit.calories}</span></span>
                </div>

                <div class="space-y-4">
                    <div class="relative">
                        <div class="flex justify-between text-[10px] font-bold text-stone-500 mb-1">
                            <span>Sugar Density</span>
                            <span>${fruit.sugar}</span>
                        </div>
                        <div class="h-1 bg-stone-200 rounded-full overflow-hidden">
                            <div class="h-full bg-orange-400 w-0 group-hover:w-[75%] transition-all duration-[2s] ease-out"></div>
                        </div>
                    </div>

                    <div class="flex gap-4 pt-2">
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-full bg-stone-300"></div>
                            <span class="text-[10px] text-stone-400 uppercase">Prot: 0g</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-full bg-stone-300"></div>
                            <span class="text-[10px] text-stone-400 uppercase">Fat: 0g</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-10 flex items-center justify-between relative z-10">
            <div class="flex -space-x-2">
                <div class="w-6 h-6 rounded-full bg-orange-100 border border-white"></div>
                <div class="w-6 h-6 rounded-full bg-orange-200 border border-white"></div>
                <div class="w-6 h-6 rounded-full bg-orange-300 border border-white"></div>
            </div>
            <button class="group/btn flex items-center gap-2 text-[10px] font-bold text-stone-800 uppercase tracking-widest overflow-hidden">
                <span class="group-hover/btn:translate-x-1 transition-transform">Download Data</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
    </div>`
    }