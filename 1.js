function getBiodata(name, age, address, hobbies, is_married, list_school, skills, interest_in_coding) {
    let biodata = {
        name: name,
        age: age,
        address: address,
        hobbies: hobbies,
        is_married: is_married,
        list_school: list_school,
        skills: skills,
        interest_in_coding: interest_in_coding
    }

    return JSON.stringify(biodata);
}

getBiodata("Josua Krist Hamonagan", "21", "Cilegon, Banten", ["Singing","Movie","Coding"],false, {"name": "SMAN 2 Krakatau Steel", "year in" : "2013", "year out":"2016"}, [{"javascript" :"beginner"}, {"php" : "beginner", "android":"beginer"}]);
