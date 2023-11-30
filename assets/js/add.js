    
    function imt() {
        let height = +userHeight.value;
        let weight = +userWeight.value;
        let bodyMassIndex = weight / height **2;
        let diagnosis = '...';
        
        if(bodyMassIndex <= 16) {
            diagnosis = 'Дефицит массы тела';
        } else if(bodyMassIndex >= 16 && bodyMassIndex < 18.5) {
            diagnosis = 'Недостаточная (дефицит) масса тела';
        } else if(bodyMassIndex >= 18.5 && bodyMassIndex < 25) {
            diagnosis = 'Нормальная масса тела';
        } else if (bodyMassIndex >= 25 && bodyMassIndex < 30) {
            diagnosis = 'Избыточная масса тела (предожирение)';
        } else if(bodyMassIndex >= 30 && bodyMassIndex < 35) {
            diagnosis = 'Ожирение 1 степени';
        } else if(bodyMassIndex >= 35 && bodyMassIndex < 40) {
            diagnosis = 'Ожирение 2 степени';
        } else if(bodyMassIndex >= 40) {
            diagnosis = 'Ожирение 3 степени'
        }

        bodyMassIndex = Math.round(bodyMassIndex * 10) / 10;
        

        result.innerHTML = bodyMassIndex;
        addedInfo.innerHTML = diagnosis;
    }

    