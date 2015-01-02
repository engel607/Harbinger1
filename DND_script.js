var vCharacter_Race = "Human";
var vCharacter_Sub_Race = "Human";
var vCharacter_Class = "Fighter";
var vCharacter_Sub_Class = "";
var vCharacter_Level = "1";
var vCharacter_Gender = "Male";
var vCharacter_Background = "";
var vCharacter_Alignment = "Lawful Good";
var vCharacter_Height_ft = "5";
var vCharacter_Height_in = "11";
var vCharacter_Weight = "";
var vCharacter_Age = "50";
var vCharacter_Hair_Color = "Brown";
var vCharacter_Eye_Color = "Blue";
var vCharacter_Skin_Color = "White";
var vCharacter_XP = "500";
var vCharacter_Name = "John Smith";
var vCharacter_Player_Name = "Franklin";
var vCharacter_Strength = "13";
var vCharacter_Strength_Mod = "+1";
var vCharacter_Dexterity = "13";
var vCharacter_Dexterity_Mod = "+1";
var vCharacter_Constitution = "13";
var vCharacter_Constitution_Mod = "+1";
var vCharacter_Intelligence = "13";
var vCharacter_Intelligence_Mod = "+1";
var vCharacter_Wisdom = "13";
var vCharacter_Wisdom_Mod = "+1";
var vCharacter_Charisma = "13";
var vCharacter_Charisma_Mod = "+1";
var vCharacter_Passive_Wisdom = "";
var vCharacter_Initiative = "";
var vCharacter_Speed = "";
var rollHeightValue = 0;
var rollWeightValue = 0;
var racialBonusApplied = false;

var currentScreen = 1;
var lastScreen = 8;
	function navBack(){
		if(currentScreen != 1){
			currentScreen--;
			navVisibility();
			document.getElementById("nav_selector").selectedIndex = currentScreen - 1;
		}
	}

	function navSelect(){
		currentScreen = document.getElementById("nav_selector").selectedIndex + 1;
		navVisibility();
	}
	
	function navForward(){
		if(currentScreen != lastScreen){
			currentScreen++;
			navVisibility();
			document.getElementById("nav_selector").selectedIndex = currentScreen - 1;
			}
	}

	function navVisibility(){
		for(i=1;i<9;i++){
			document.getElementById("section_" + String(i)).hidden = true;
			document.getElementById("section_i" + String(i)).hidden = true;
		}
		var newScreen = "section_" + String(currentScreen);
		var newScreenI = "section_i" + String(currentScreen);
		document.getElementById(newScreen).hidden = false;
		document.getElementById(newScreenI).hidden = false;
	}
	
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
		document.getElementById("rb_default").hidden = true;
		document.getElementById("rb_dwarf").hidden = true;
		document.getElementById("rb_highelf").hidden = true;
		document.getElementById("rb_human").hidden = true;
		document.getElementById("rb_dragonborn").hidden = true;
		document.getElementById("rb_halfelf").hidden = true
		switch(String(vCharacter_Sub_Race)) {
			case "Hill_Dwarf":
			case "Mountain_Dwarf":
				document.getElementById("rb_dwarf").hidden = false;
				break;
			case "High_Elf":
				document.getElementById("rb_highelf").hidden = false;
				break;
			case "Human":
				document.getElementById("rb_human").hidden = false;
				break;
			case "Dragonborn":
				document.getElementById("rb_dragonborn").hidden = false;
				break;
			case "Halfelf":
				document.getElementById("rb_halfelf").hidden = false;
				break;
			default:
				document.getElementById("rb_default").hidden = false;
				break;		
		}
	}
	
	function store_Age(Character_Age){
		vCharacter_Age = Character_Age;
	}
	
	function store_Hair(Character_Hair){
		vCharacter_Hair_Color = Character_Hair;
	}
	
	function store_Eyes(Character_Eyes){
		vCharacter_Eye_Color = Character_Eyes;
	}
	
	function store_Skin(Character_Skin){
		vCharacter_Skin_Color = Character_Skin;
	}
	
	function store_Alignment(Character_Alignment){
		vCharacter_Alignment = Character_Alignment;
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
	
	function saveAbilityScores(){
		var abil1 = document.getElementById("ability1").value;
		var abil2 = document.getElementById("ability2").value;
		var abil3 = document.getElementById("ability3").value;
		var abil4 = document.getElementById("ability4").value;
		var abil5 = document.getElementById("ability5").value;
		var abil6 = document.getElementById("ability6").value;
		var isDuplicate = false;
		//Make sure there are no duplicates
		if(abil1 == abil2) isDuplicate = true;
		if(abil1 == abil3) isDuplicate = true;
		if(abil1 == abil4) isDuplicate = true;
		if(abil1 == abil5) isDuplicate = true;
		if(abil1 == abil6) isDuplicate = true;
		if(abil2 == abil3) isDuplicate = true;
		if(abil2 == abil4) isDuplicate = true;
		if(abil2 == abil5) isDuplicate = true;
		if(abil2 == abil6) isDuplicate = true;
		if(abil3 == abil4) isDuplicate = true;
		if(abil3 == abil5) isDuplicate = true;
		if(abil3 == abil6) isDuplicate = true;
		if(abil4 == abil5) isDuplicate = true;
		if(abil4 == abil6) isDuplicate = true;
		if(abil5 == abil6) isDuplicate = true;
		if(isDuplicate == true) {
			document.getElementById("ability_score_chkbox_id").checked = false;
			window.alert("Duplicate found please check your selections.");
		}
		else{
			document.getElementById("ability_score_chkbox_id").checked = true;
			parseAbiltiy(abil1,"1");
			parseAbiltiy(abil2,"2");
			parseAbiltiy(abil3,"3");
			parseAbiltiy(abil4,"4");
			parseAbiltiy(abil5,"5");
			parseAbiltiy(abil6,"6");	
		}
		

		
		vCharacter_Passive_Wisdom = "";
		vCharacter_Initiative = "";
		vCharacter_Speed = "";
	}
	
	function parseAbiltiy(ability_in, abil_num) {
		var scoreVal = document.getElementById("score" + abil_num).value;
		var scoreMod = calcAbilityMod(scoreVal)
		switch(ability_in) {
			case "Strength":
				vCharacter_Strength = scoreVal;
				vCharacter_Strength_Mod = scoreMod;
				break;
			case "Dexterity":
				vCharacter_Dexterity = scoreVal;
				vCharacter_Dexterity_Mod = scoreMod;
				break;
			case "Constitution":
				vCharacter_Constitution = scoreVal;
				vCharacter_Constitution_Mod = scoreMod;
				break;
			case "Intelligence":
				vCharacter_Intelligence = scoreVal;
				vCharacter_Intelligence_Mod = scoreMod;
				break;
			case "Wisdom":
				vCharacter_Wisdom = scoreVal;
				vCharacter_Wisdom_Mod = scoreMod;
				break;
			case "Charisma":
				vCharacter_Charisma = scoreVal;
				vCharacter_Charisma_Mod = scoreMod;
				break;
		}
	}
	
	function calcAbilityMod(score_in){
		var ability_mod = -5;
		if(score_in > 1) ability_mod++;
		if(score_in > 3) ability_mod++;
		if(score_in > 5) ability_mod++;
		if(score_in > 7) ability_mod++;
		if(score_in > 9) ability_mod++;
		if(score_in > 11) ability_mod++;
		if(score_in > 13) ability_mod++;
		if(score_in > 15) ability_mod++;
		if(score_in > 17) ability_mod++;
		if(score_in > 19) ability_mod++;
		if(score_in > 21) ability_mod++;
		if(score_in > 23) ability_mod++;
		if(score_in > 25) ability_mod++;
		if(score_in > 27) ability_mod++;
		if(score_in > 29) ability_mod++;
		if(score_in > 30) ability_mod++;
		
		if(ability_mod < 0){
			ability_mod = "-" + String(ability_mod);
		}
		else if(ability_mod == 0){
			ability_mod = String(ability_mod);
		}
		else if(ability_mod > 0){
			ability_mod = "+" + String(ability_mod);
		}
		return ability_mod;
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
	
	function store_Data(data, typeOfData){
		switch(String(typeOfData)) {
			case "Subclass":
				vCharacter_Sub_Class = data;
				break;
			case "Level":
				vCharacter_Level = data;
				break;
			case "Player_Name":
				vCharacter_Player_Name = data;
				break;
			case "Character_Name":
				vCharacter_Name = data;
				break;
			case "Gender":
				vCharacter_Gender = data;
				break;
			case "Age":
				vCharacter_Age = data;
				break;
			case "Hair_Color":
				vCharacter_Hair_Color = data;
				break;
			case "Eye_Color":
				vCharacter_Eye_Color = data;
				break;
			case "Skin_Color":
				vCharacter_Skin_Color = data;
				break;
			case "Height_ft":
				vCharacter_Height_ft = data;
				break;
			case "Height_in":
				vCharacter_Height_in = data;
				break;
			case "Weight":
				vCharacter_Weight = data;
				break;
				
				
		}
	
	}
	
	function store_race_bonus(data, typeOfData){
	switch(String(typeOfData)) {
		case "tool":
			break;
		case "cantrip":
			break;
		case "language":
			break;
		case "ability":
			break;
		case "skill":
			break;
	}
	}
	
	function racialBonus(){
		switch(vCharacter_Sub_Race) {
			case Hill_Dwarf:
				//Constitution +2
				vCharacter_Constitution = vCharacter_Constitution + 2;
				//Wisdom +1
				vCharacter_Wisdom =  vCharacter_Wisdom  + 1;
				//HP + 1
				break;
			case Mountain_Dwarf:
				//Constitution +2
				vCharacter_Constitution = vCharacter_Constitution +2;
				//Strength + 2
				vCharacter_Strength = vCharacter_Strength + 2;
				break;
			case High_Elf:
				//Dexterity +2
				vCharacter_Dexterity = vCharacter_Dexterity + 2;
				//Intelligence +1
				vCharacter_Intelligence = vCharacter_Intelligence +1;
				break;
			case Wood_Elf:
				//Dexterity +2
				vCharacter_Dexterity = vCharacter_Dexterity + 2;
				//Wisdom +1
				vCharacter_Wisdom = vCharacter_Wisdom + 1;
				break;
			case Dark_Elf:
				//Dexterity +2
				vCharacter_Dexterity = vCharacter_Dexterity + 2;
				//Charisma +1
				vCharacter_Charisma = vCharacter_Charisma + 1;
				break;
			case Lightfoot_Halfling:
				//Dexterity +2
				vCharacter_Dexterity = vCharacter_Dexterity + 2;
				//Charisma  +1
				vCharacter_Charisma = vCharacter_Charisma + 1;
				break;
			case Stout_Halfling:
				//Dexterity +2
				vCharacter_Dexterity = vCharacter_Dexterity +2;
				//Constitution +1
				vCharacter_Constitution = vCharacter_Constitution + 1;
				break;
			case Human:
				//All Ability Scores +1
				break;
			case Dragonborn:
				//Strength +2
				vCharacter_Strength = vCharacter_Strength + 2;
				//Charisma +1
				vCharacter_Charisma = vCharacter_Charisma + 1;
				break;
			case Forest_Gnome:
				//Intelligence +2
				vCharacter_Intelligence + vCharacter_Intelligence + 2;
				//Dexterity +1
				vCharacter_Dexterity = vCharacter_Dexterity + 1;
				break;
			case Rock_Gnome:
				//Intelligence +2
				vCharacter_Intelligence = vCharacter_Intelligence + 2;
				//Constitution +1
				vCharacter_Constitution = vCharacter_Constitution + 1;
				break;
			case Halfelf:
				//Charisma +2
				vCharacter_Charisma = vCharacter_Charisma + 2;
				//Two other abilities +2
				break;
			case Tiefling:
				//Intelligence +1
				vCharacter_Intelligence = vCharacter_Intelligence + 1;
				//Charisma +2
				vCharacter_Charisma = vCharacter_Charisma + 2;
				break;

		}
	}
	
	function saveFile(){
		document.getElementById("pdfPages").hidden = false;
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
		writeTextPdf1(vCharacter_Alignment,680,150); //Alignment Location
		writeTextPdf1(vCharacter_XP,850,150); //Experience Points Location

		//1st Left Boxes
		writeTextPdf1(vCharacter_Strength,85,300); // Strength Location
		writeTextPdf1(vCharacter_Strength_Mod,85,345); // Strength Mod Location

		writeTextPdf1(vCharacter_Dexterity,85,430); // Dexterity Location
		writeTextPdf1(vCharacter_Dexterity_Mod,85,475); // Dexterity Mod Location

		writeTextPdf1(vCharacter_Constitution,85,560); // Constitution Location
		writeTextPdf1(vCharacter_Constitution_Mod,85,600); // Constitution Mod Location

		writeTextPdf1(vCharacter_Intelligence,85,690); // Intelligence Location
		writeTextPdf1(vCharacter_Intelligence_Mod,85,730); // Intelligence Mod Location

		writeTextPdf1(vCharacter_Wisdom,85,820); // Wisdom Location
		writeTextPdf1(vCharacter_Wisdom_Mod,85,857); // Wisdom Mod Location

		writeTextPdf1(vCharacter_Charisma,85,945); // Charisma Location
		writeTextPdf1(vCharacter_Charisma_Mod,85,985); // Charisma Mod Location

		writeTextPdf1("500 ",58,1070); // Passive Wisdom Location

		//2nd Left Boxes
		// writeTextPdf1("500 ",80,490); // Strength Location
		// writeTextPdf1("500 ",80,345); // Strength Mod Location

		// writeTextPdf1("500 ",80,430); // Dexterity Location
		// writeTextPdf1("500 ",80,475); // Dexterity Mod Location

		// writeTextPdf1("500 ",80,560); // Constitution Location
		// writeTextPdf1("500 ",80,600); // Constitution Mod Location

		// writeTextPdf1("500 ",80,690); // Intelligence Location
		// writeTextPdf1("500 ",80,730); // Intelligence Mod Location

		// writeTextPdf1("500 ",80,820); // Wisdom Location
		// writeTextPdf1("500 ",80,857); // Wisdom Mod Location

		// writeTextPdf1("500 ",80,945); // Charisma Location
		// writeTextPdf1("500 ",80,985); // Charisma Mod Location

		// writeTextPdf1("500 ",58,1070); // Passive Wisdom Location
	
	}
	
	function genPDF2(){
		var pdf2Instance = Processing.getInstanceById('canvasPDF2');
		pdf2Instance.clearPDF();
		writeTextPdf2(vCharacter_Name,100,130); //Character Name Location
		//Top right box
		writeTextPdf2(vCharacter_Age,475,105); //Age Location
		writeTextPdf2(String(vCharacter_Height_ft)+"'"+String(vCharacter_Height_in)+'"',680,105); //Height Location
		writeTextPdf2(vCharacter_Weight,850,105); //Weight Location

		writeTextPdf2(vCharacter_Eye_Color,475,150); //Eyes Location
		writeTextPdf2(vCharacter_Skin_Color,680,150); //Skin Location
		writeTextPdf2(vCharacter_Hair_Color,850,150); //Hair Location
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
				rollHeightValue = rollD4() + rollD4();
				break;
			case "Mountain_Dwarf":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 0;
				rollHeightValue = rollD4() + rollD4();
				break;
			case "Lightfoot_Halfling":
			case "Stout_Halfling":
				vCharacter_Height_ft = 2;
				vCharacter_Height_in = 7;
				rollHeightValue = rollD4() + rollD4();
				break;
			case "Forest_Gnome":
			case "Rock_Gnome":
				vCharacter_Height_ft = 2;
				vCharacter_Height_in = 11;
				rollHeightValue = rollD4() + rollD4();
				break;
			
			case "Dark_Elf":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 5;
				rollHeightValue = rollD6() + rollD6();
				break;
			
			case "Dragonborn":
				vCharacter_Height_ft = 5;
				vCharacter_Height_in = 6;
				rollHeightValue = rollD8() + rollD8();
				break;
			case "Halfelf":
			case "Tiefling":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 9;
				rollHeightValue = rollD8() + rollD8();
				break;
			
			case "Human":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 8;
				rollHeightValue = rollD10() + rollD10();
				break;
			case "High_Elf":
			case "Wood_Elf":
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 6;
				rollHeightValue = rollD10() + rollD10();
				break;
			default:
				vCharacter_Height_ft = 4;
				vCharacter_Height_in = 8;
				rollHeightValue = rollD10() + rollD10();
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
				rollWeightValue = rollD6() + rollD6();
				break;
			case "Mountain_Dwarf":
				vCharacter_Weight = 130;
				rollWeightValue = rollD6() + rollD6();
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
				rollWeightValue = rollD6() + rollD6();
				break;
			case "Halfelf":
			case "Tiefling":
			case "Human":
				vCharacter_Weight = 110;
				rollWeightValue = rollD4() + rollD4();
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