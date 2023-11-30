    
    function imt() {
        let height = +userHeight.value;
        let weight = +userWeight.value;
        let bodyMassIndex = weight / height **2;
        
        if(bodyMassIndex <= 16) {
            addedInfo = 'Дефицит массы тела';
        } else if(bodyMassIndex >= 16 && bodyMassIndex < 18.5) {
            addedInfo = 'Недостаточная (дефицит) масса тела';
        } else if(bodyMassIndex >= 18.5 && bodyMassIndex < 25) {
            addedInfo = 'Нормальная масса тела';
        } else if (bodyMassIndex >= 25 && bodyMassIndex < 30) {
            addedInfo = 'Избыточная масса тела (предожирение)';
        } else if(bodyMassIndex >= 30 && bodyMassIndex < 35) {
            addedInfo = 'Ожирение 1 степени';
        } else if(bodyMassIndex >= 35 && bodyMassIndex < 40) {
            addedInfo = 'Ожирение 2 степени';
        } else if(bodyMassIndex >= 40) {
            addedInfo = 'Ожирение 3 степени'
        }

        bodyMassIndex = Math.round(bodyMassIndex * 10) / 10;
        

        result.innerHTML = bodyMassIndex;
        addedInfo.innerHTML = addedInfo;
    }

    