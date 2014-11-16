/***********************
* Actions de compositions pour Adobe Edge Animate
*
* Modifier ce fichier avec précaution, en veillant à conserver 
* les signatures et les commentaires de fonction commençant par « Edge » pour maintenir la 
* possibilité d’interagir avec ces actions depuis Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias pour les classes Edge couramment utilisées

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_menuButtonClick2}", "click", function(sym, e) {
         
         sym.getSymbol("menuButtonClick2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menu2Copy}", "swipeleft", function(sym, e) {
         // Insérer le code à exécuter lorsqu’un événement swipeleft survient au niveau d’un élémenco,
         console.log("yes");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'menuButtonClick'
   (function(symbolName) {   
   
   })("menuButtonClick");
   //Edge symbol end:'menuButtonClick'

   //=========================================================
   
   //Edge symbol: 'menuClicked'
   (function(symbolName) {   
   
   })("menuClicked");
   //Edge symbol end:'menuClicked'

   //=========================================================
   
   //Edge symbol: 'isClick'
   (function(symbolName) {   
   
   })("isClick");
   //Edge symbol end:'isClick'

   //=========================================================
   
   //Edge symbol: 'buttonMenu'
   (function(symbolName) {   
   
            Symbol.bindElementAction(compId, symbolName, "${_menuButton}", "click", function(sym, e) {
         	
         	sym.getSymbol("menuClicked2").play();
         	
         	
         	
         	
         	
         	

      });
         //Edge binding end



   })("buttonMenu");
   //Edge symbol end:'buttonMenu'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

})(jQuery, AdobeEdge, "content");