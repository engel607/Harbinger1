var vCharacter_Race = "";
var vCharacter_Sub_Race = "";
var vCharacter_Class = "";
var vCharacter_Sub_Class = "";
var vCharacter_Level = 1;
var vCharacter_Gender = "";
var vCharacter_Background = "";
var vCharacter_Alignment = "";
var vCharacter_Height_ft = "";
var vCharacter_Height_in = "";
var vCharacter_Weight = "";
var vCharacter_XP = "";
var vCharacter_Name = "";
var vCharacter_Player_Name = "";
var vCharacter_Strength = "";
var vCharacter_Strength_Mod = "";
var vCharacter_Dexterity = "";
var vCharacter_Dexterity_Mod = "";
var vCharacter_Constitution = "";
var vCharacter_Constitution_Mod = "";
var vCharacter_Intelligence = "";
var vCharacter_Intelligence_Mod = "";
var vCharacter_Wisdom = "";
var vCharacter_Wisdom_Mod = "";
var vCharacter_Charisma = "";
var vCharacter_Charisma_Mod = "";
var vCharacter_Passive_Wisdom = "";
var vCharacter_Initiative = "";
var vCharacter_Speed = "";
var rollHeightValue = 0;
var rollWeightValue = 0;

	function detailed_Race(Character_Race){
		document.getElementById("sr_dwarf").hidden = true;
		document.getElementById("sr_elf").hidden = true;
		document.getElementById("sr_halfling").hidden = true;
		document.getElementById("sr_human").hidden = true;
		document.getElementById("sr_dragonborn").hidden = true;
		document.getElementById("sr_gnome").hidden = true;
		document.getElementById("sr_halfelf").hidden = true;
		document.getElementById("sr_tiefling").hidden = true;
		document.getElementById("sr_default").hidden = true;
		vCharacter_Race = Character_Race;
		switch(String(Character_Race)) {
			case "Dwarf":
				document.getElementById("sr_dwarf").hidden = false;
				break;
			case "Elf":
				document.getElementById("sr_elf").hidden = false;
				break;
			case "Halfling":
				document.getElementById("sr_halfling").hidden = false;
				break;
			case "Human":
				document.getElementById("sr_human").hidden = false;
				break;
			case "Dragonborn":
				document.getElementById("sr_dragonborn").hidden = false;
				break;
			case "Gnome":
				document.getElementById("sr_gnome").hidden = false;
				break;
			case "Half_Elf":
				document.getElementById("sr_halfelf").hidden = false;
				break;
			case "Tiefling":
				document.getElementById("sr_tiefling").hidden = false;
				break;		
		}
	}
		
	function detailed_Class(Character_Class){
		document.getElementById("sc_barbarian").hidden = true;
		document.getElementById("sc_bard").hidden = true;
		document.getElementById("sc_cleric").hidden = true;
		document.getElementById("sc_druid").hidden = true;
		document.getElementById("sc_fighter").hidden = true;
		document.getElementById("sc_monk").hidden = true;
		document.getElementById("sc_paladin").hidden = true;
		document.getElementById("sc_ranger").hidden = true;
		document.getElementById("sc_rogue").hidden = true;
		document.getElementById("sc_sorcerer").hidden = true;
		document.getElementById("sc_warlock").hidden = true;
		document.getElementById("sc_wizard").hidden = true;
		document.getElementById("sc_default").hidden = true;
		vCharacter_Class = Character_Class;
		switch(String(Character_Class)) {
			case "Barbarian":
				document.getElementById("sc_barbarian").hidden = false;
				break;
			case "Bard":
				document.getElementById("sc_bard").hidden = false;
				break;
			case "Cleric":
				document.getElementById("sc_cleric").hidden = false;
				break;
			case "Druid":
				document.getElementById("sc_druid").hidden = false;
				break;
			case "Fighter":
				document.getElementById("sc_fighter").hidden = false;
				break;
			case "Monk":
				document.getElementById("sc_monk").hidden = false;
				break;
			case "Paladin":
				document.getElementById("sc_paladin").hidden = false;
				break;
			case "Ranger":
				document.getElementById("sc_ranger").hidden = false;
				break;		
			case "Rogue":
				document.getElementById("sc_rogue").hidden = false;
				break;		
			case "Sorcerer":
				document.getElementById("sc_sorcerer").hidden = false;
				break;		
			case "Warlock":
				document.getElementById("sc_warlock").hidden = false;
				break;		
			case "Wizard":
				document.getElementById("sc_wizard").hidden = false;
				break;		
		}
	}
	
	function store_Subrace(Character_Subrace){
		vCharacter_Sub_Race = Character_Subrace;
	}
	
	function store_Subclass(Character_Subclass){
		vCharacter_Sub_Class = Character_Subclass;
	}
	
	function store_Level(Character_Level){
		vCharacter_Level = Character_Level;
		
	}
	
	function store_PName(Player_Name){
		vCharacter_Player_Name = Player_Name;
	}
	
	function store_CName(Character_Name){
		vCharacter_Name = Character_Name;
	}
	
	function rollAbilityScores(){
		var score1,score2,score3,score4,score5,score6;
		score1 = sum3highest();
		score2 = sum3highest();
		score3 = sum3highest();
		score4 = sum3highest();
		score5 = sum3highest();
		score6 = sum3highest();
		document.getElementById("score1").value = score1;
		document.getElementById("score2").value = score2;
		document.getElementById("score3").value = score3;
		document.getElementById("score4").value = score4;
		document.getElementById("score5").value = score5;
		document.getElementById("score6").value = score6;
	}
	
	function sum3highest(){
	var roll1 = rollD6();
	var roll2 = rollD6();
	var roll3 = rollD6();
	var roll4 = rollD6();
	
	var high1 = roll1 + roll2 + roll3;
	var high2 = roll1 + roll2 + roll4;
	var high3 = roll1 + roll3 + roll4;
	var high4 = roll2 + roll3 + roll4;
	return Math.max(high1,high2,high3,high4);
	}
	
	
	
	function saveFile(){
		genPDF1();
		genPDF2();
	}
	
	function genPDF1(){
		var pdf1Instance = Processing.getInstanceById('mycanvas');
		pdf1Instance.clearPDF();
		writeTextPdf1(vCharacter_Name,100,130); //Character Name Location
		//Top right box
		writeTextPdf1("Lvl " + String(vCharacter_Level) + " " + String(vCharacter_Class) ,475,105); //Class Location
		writeTextPdf1("Background ",680,105); //Background Location
		writeTextPdf1(vCharacter_Player_Name,850,105); //Player Name Location

		writeTextPdf1(vCharacter_Race,475,150); //Race Location
		writeTextPdf1("Lawful Good ",680,150); //Alignment Location
		writeTextPdf1("500 ",850,150); //Experience Points Location

		//1st Left Boxes
		writeTextPdf1("500 ",80,300); // Strength Location
		writeTextPdf1("500 ",80,345); // Strength Mod Location

		writeTextPdf1("500 ",80,430); // Dexterity Location
		writeTextPdf1("500 ",80,475); // Dexterity Mod Location

		writeTextPdf1("500 ",80,560); // Constitution Location
		writeTextPdf1("500 ",80,600); // Constitution Mod Location

		writeTextPdf1("500 ",80,690); // Intelligence Location
		writeTextPdf1("500 ",80,730); // Intelligence Mod Location

		writeTextPdf1("500 ",80,820); // Wisdom Location
		writeTextPdf1("500 ",80,857); // Wisdom Mod Location

		writeTextPdf1("500 ",80,945); // Charisma Location
		writeTextPdf1("500 ",80,985); // Charisma Mod Location

		writeTextPdf1("500 ",58,1070); // Passive Wisdom Location

		//2nd Left Boxes
		writeTextPdf1("500 ",80,490); // Strength Location
		writeTextPdf1("500 ",80,345); // Strength Mod Location

		writeTextPdf1("500 ",80,430); // Dexterity Location
		writeTextPdf1("500 ",80,475); // Dexterity Mod Location

		writeTextPdf1("500 ",80,560); // Constitution Location
		writeTextPdf1("500 ",80,600); // Constitution Mod Location

		writeTextPdf1("500 ",80,690); // Intelligence Location
		writeTextPdf1("500 ",80,730); // Intelligence Mod Location

		writeTextPdf1("500 ",80,820); // Wisdom Location
		writeTextPdf1("500 ",80,857); // Wisdom Mod Location

		writeTextPdf1("500 ",80,945); // Charisma Location
		writeTextPdf1("500 ",80,985); // Charisma Mod Location

		writeTextPdf1("500 ",58,1070); // Passive Wisdom Location
	
	}
	
	function genPDF2(){
		var pdf2Instance = Processing.getInstanceById('canvasPDF2');
		pdf2Instance.clearPDF();
		writeTextPdf2(vCharacter_Name,100,130); //Character Name Location
		//Top right box
		writeTextPdf2("25",475,105); //Age Location
		writeTextPdf2(String(vCharacter_Height_ft)+"'"+String(vCharacter_Height_in)+'"',680,105); //Height Location
		writeTextPdf2(vCharacter_Weight,850,105); //Weight Location

		writeTextPdf2("Blue",475,150); //Eyes Location
		writeTextPdf2("White ",680,150); //Skin Location
		writeTextPdf2("Brown ",850,150); //Hair Location
	}
	
	function writeTextPdf1(TextToWrite,xcoord,ycoord){
		var pdf1Instance = Processing.getInstanceById('mycanvas');
		pdf1Instance.text(String(TextToWrite),xcoord,ycoord);
	}
	
	function writeTextPdf2(TextToWrite,xcoord,ycoord){
		var pdf2Instance = Processing.getInstanceById('canvasPDF2');
		pdf2Instance.text(String(TextToWrite),xcoord,ycoord);
	}
	
	
	function rollHeight() {
		 rollHeightValue = 0;
		switch(vCharacter_Sub_Race) {
			case "Hill_Dwarf":
				vCharacter_Height_ft = 3;
				vCharacter_Height_in = 8;
				rollHeightValue = rollD4();
				break;
			case "Mountain_Dwarf":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 0;
				rollHeightValue = rollD4();
				break;
			case "Lightfoot_Halfling":
			case "Stout_Halfling":
				vCharacter_Height_ft = 2;
				vCharacter_Height_in = 7;
				rollHeightValue = rollD4();
				break;
			case "Forest_Gnome":
			case "Rock_Gnome":
				vCharacter_Height_ft = 2;
				vCharacter_Height_in = 11;
				rollHeightValue = rollD4();
				break;
			
			case "Dark_Elf":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 5;
				rollHeightValue = rollD6();
				break;
			
			case "Dragonborn":
				vCharacter_Height_ft = 5;
				vCharacter_Height_in = 6;
				rollHeightValue = rollD8();
				break;
			case "Halfelf":
			case "Tiefling":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 9;
				rollHeightValue = rollD8();
				break;
			
			case "Human":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 8;
				rollHeightValue = rollD10();
				break;
			case "High_Elf":
			case "Wood_Elf":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 6;
				rollHeightValue = rollD10();
				break;
			default:
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 8;
				rollHeightValue = rollD10();
				break;
		}
		if(rollHeightValue >=12) {
		vCharacter_Height_ft ++;
		rollHeightValue = rollHeightValue - 12;
		}
		vCharacter_Height_in = vCharacter_Height_in + rollHeightValue;
		if(vCharacter_Height_in >= 12) {
			vCharacter_Height_ft++;
			vCharacter_Height_in = vCharacter_Height_in - 12;
			if(vCharacter_Height_in >= 12) {
				vCharacter_Height_ft++;
			vCharacter_Height_in = vCharacter_Height_in - 12;
			}
		}
		document.getElementById("char_Height_ft").value = vCharacter_Height_ft;
		document.getElementById("char_Height_in").value = vCharacter_Height_in;
	}
	
	function rollWeight() {
		rollWeightValue = 0;
		switch(vCharacter_Sub_Race) {
			case "Hill_Dwarf":
				vCharacter_Weight = 115;
				rollWeightValue = rollD6();
				rollWeightValue = rollWeightValue + rollD6();
				break;
			case "Mountain_Dwarf":
				vCharacter_Weight = 130;
				rollWeightValue = rollD6();
				rollWeightValue = rollWeightValue + rollD6();
				break;
			case "Lightfoot_Halfling":
			case "Stout_Halfling":
			case "Forest_Gnome":
			case "Rock_Gnome":
				vCharacter_Weight = 35;
				break;
			
			case "Dark_Elf":
				vCharacter_Weight = 75;
				rollWeightValue = rollD6();
				break;
			
			case "Dragonborn":
				vCharacter_Weight = 175;
				rollWeightValue = rollD6();
				rollWeightValue = rollWeightValue + rollD6();
				break;
			case "Halfelf":
			case "Tiefling":
			case "Human":
				vCharacter_Weight = 110;
				rollWeightValue = rollD4();
				rollWeightValue = rollWeightValue + rollD4();
				break;
			case "High_Elf":
				vCharacter_Weight = 90;
				rollWeightValue = rollD4();
				break;
			case "Wood_Elf":
				vCharacter_Weight = 100;
				rollWeightValue = rollD4();
				break;
			default:
				vCharacter_Weight = 100;
				rollWeightValue = rollD4();
				break;
		}
		vCharacter_Weight = vCharacter_Weight +(rollHeightValue * rollWeightValue);
		document.getElementById("char_Weight").value = vCharacter_Weight;
	}
	
	function rollD2(){
		var result = Math.random() +1;
		return result;
	}
	
	function rollD4(){
		var result = Math.floor(Math.random() * 5) +1;
		return result;
	}
	
	function rollD6(){
		var result = Math.floor(Math.random() * 7) + 1;
		return result;
	}
	
	function rollD8(){
		var result = Math.floor(Math.random() * 9) + 1;
		return result;
	}
	
	function rollD10(){
		var result = Math.floor(Math.random() * 11) + 1;
		return result;
	}
	
	function rollD20(){
		var result = Math.floor(Math.random() * 21) + 1;
		return result;
	}