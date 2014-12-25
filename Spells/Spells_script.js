

	function spellGlobalSelect(spellSelect, visibility) {
		var isShown = !visibility;
		if(String(spellSelect) != "All_Spells" && String(spellSelect) != "Cantrips") {
			if(document.getElementById("spell_select_all_id").checked == true && visibility == false) document.getElementById("spell_select_all_id").checked = false;
		}
		
		switch(String(spellSelect)){
			case "Cantrips":
				document.getElementById("spell_cantrip").hidden = isShown;
				break;
			case "All_Spells":
				for(i=1;i<10;i++){
					document.getElementById("spell_select_lvl" + String(i) +"_id").checked = visibility;
				}
				document.getElementById("spell_lvl_1").hidden = isShown;
				document.getElementById("spell_lvl_2").hidden = isShown;
				document.getElementById("spell_lvl_3").hidden = isShown;
				document.getElementById("spell_lvl_4").hidden = false;
				document.getElementById("spell_lvl_5").hidden = false;
				// document.getElementById("spell_lvl_6").hidden = false;
				// document.getElementById("spell_lvl_7").hidden = false;
				document.getElementById("spell_lvl_8").hidden = false;
				// document.getElementById("spell_lvl_9").hidden = false;
				break;
			case "lvl1":
				document.getElementById("spell_lvl_1").hidden = isShown;
				break;
			case "lvl2":
				document.getElementById("spell_lvl_2").hidden = isShown;
				break;
			case "lvl3":
				document.getElementById("spell_lvl_3").hidden = isShown;
				break;
			case "lvl4":
				document.getElementById("spell_lvl_4").hidden = isShown;
				break;
			case "lvl5":
				document.getElementById("spell_lvl_5").hidden = isShown;
				break;
			case "lvl6":
				document.getElementById("spell_lvl_6").hidden = isShown;
				break;
			case "lvl7":
				document.getElementById("spell_lvl_7").hidden = isShown;
				break;
			case "lvl8":
				document.getElementById("spell_lvl_8").hidden = isShown;
				break;
			case "lvl9":
				document.getElementById("spell_lvl_9").hidden = isShown;
				break;
		}
}

	function spellSchoolSelect(spellSelect, visibility){
		var isShown = !visibility;
		if(String(spellSelect) != "All_Schools") {
			if(document.getElementById("school_select_all_id").checked == true && visibility == false) document.getElementById("school_select_all_id").checked = false;
		}
		switch(String(spellSelect)){
			case "All_Schools":
				for(i=1;i<9;i++){
					document.getElementById("school_" + String(i)).checked = visibility;
				}
				document.getElementById("spell_abjuration").hidden = isShown;
				document.getElementById("spell_conjuration").hidden = isShown;
				document.getElementById("spell_divination").hidden = isShown;
				document.getElementById("spell_enchantment").hidden = isShown;
				// document.getElementById("spell_evocation").hidden = isShown;
				// document.getElementById("spell_illusion").hidden = isShown;
				document.getElementById("spell_necromancy").hidden = isShown;
				document.getElementById("spell_transmutation").hidden = isShown;
				break;
			case "Abjuration":
				document.getElementById("spell_abjuration").hidden = isShown;
				break;
			case "Conjuration":
				document.getElementById("spell_conjuration").hidden = isShown;
				break;
			case "Divination":
				document.getElementById("spell_divination").hidden = isShown;
				break;
			case "Enchantment":
				document.getElementById("spell_enchantment").hidden = isShown;
				break;
			case "Evocation":
				document.getElementById("spell_evocation").hidden = isShown;
				break;
			case "Illusion":
				document.getElementById("spell_illusion").hidden = isShown;
				break;
			case "Necromancy":
				document.getElementById("spell_necromancy").hidden = isShown;
				break;
			case "Transmutation":
				document.getElementById("spell_transmutation").hidden = isShown;
				break;
			
		}
	}