const human_cat_dog_years = function(human_years){
    let catsAge;
    let dogsAge;

    if(human_years == 1){
        return [human_years, 15, 15];
    }
    if(human_years == 2){
        return [human_years,24,24];
    }

    const ExcessYears = human_years-3;
    const extra_cat_Years = ExcessYears*4;
    const extra_dog_Years = ExcessYears*5;

    return [human_years,24+extra_cat_Years,20+extra_dog_Years];
}