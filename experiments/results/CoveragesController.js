var changeCoveragesCount = function(newCount, polName){
	var covsList = document.getElementById("covsToShowList_"+polName);

	for(var i = 0; i < covsList.length; i++){
		if(i+1 > newCount){
			covsList.options[i].style.display = "none";
		}
		else{
			covsList.options[i].style.display = "block";		
		}
	}
	covsList.value = 1;

	changeCoverage(1, polName);
}


var changeCoverage = function(newCoverageIdx, polName){
	var countSelector = document.getElementById("countSelector_"+polName);
	var totalCountOfCoverages = countSelector.length;

	for(var i = 1; i <= totalCountOfCoverages; i++){
		var el = document.getElementById(polName + i);
        	if (i == newCoverageIdx){
		    el.style.display = 'block';
		    document.getElementById(polName + (i + totalCountOfCoverages)).style.display = 'block';
		}
		else{
		    el.style.display = 'none';
		    document.getElementById(polName + (i + totalCountOfCoverages)).style.display = 'none';
		}
        }
}


var getPreCoverage = function(polName){
	var countSelector = document.getElementById("countSelector_"+polName);
	var newCountOfCoverages = parseInt(countSelector.options[countSelector.selectedIndex].value);

	var covsList = document.getElementById("covsToShowList_"+polName); 
	var currentCoverageIdx = parseInt(covsList.options[covsList.selectedIndex].value);

	if(--currentCoverageIdx < 1){
		covsList.value = newCountOfCoverages;
		console.log(currentCoverageIdx);
		changeCoverage(newCountOfCoverages, polName);
		
	}else{
		changeCoverage(currentCoverageIdx, polName);
		covsList.value = currentCoverageIdx;
	}

}


var getNextCoverage = function(polName){
	var countSelector = document.getElementById("countSelector_"+polName);
	var newCountOfCoverages = parseInt(countSelector.options[countSelector.selectedIndex].value);

	var covsList = document.getElementById("covsToShowList_"+polName); 
	var currentCoverageIdx = parseInt(covsList.options[covsList.selectedIndex].value);

	if(++currentCoverageIdx > newCountOfCoverages){
		covsList.value = 1;
		changeCoverage(1, polName);
	}else{
		changeCoverage(currentCoverageIdx, polName);
		covsList.value = currentCoverageIdx;
	}

}











