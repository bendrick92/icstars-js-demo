const loadData = () => {
    return {
        "colors": [
            "white",
            "black",
            "grey",
            "blue",
            "red"
        ],
        "wheels": [
            "aero",
            "turbine"
        ],
        "images": {
            "white_aero": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PPSW,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508",
            "black_aero": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PBSB,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508",
            "grey_aero": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PMNG,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508",
            "blue_aero": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PPSB,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508",
            "red_aero": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PPMR,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508",
            "white_turbine": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PPSW,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508",
            "black_turbine": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PBSB,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508",
            "grey_turbine": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PMNG,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508",
            "blue_turbine": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PPSB,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508",
            "red_turbine": "https://static-assets.tesla.com/configurator/compositor?&options=$MT314,$PPMR,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508"
        }
    };
};

const colorsList = document.getElementById('colors-list');
const wheelsList = document.getElementById('wheels-list');
const imgOutput = document.getElementById('img-output');

let currentColor = 'white';
let currentWheel = 'aero';

const handleColorClick = (color) => {
    currentColor = color;
    changeImage();
};

const handleWheelClick = (wheel) => {
    currentWheel = wheel;
    changeImage();
};

const changeImage = () => {
    const data = loadData();
console.log(currentColor + '_' + currentWheel);
    imgOutput.src = data.images[currentColor + '_' + currentWheel];
};

const init = () => {
    const data = loadData();
    
    data.colors.map((color) => {
        let colorOption = document.createElement('li');
        colorOption.innerHTML = color;
        colorOption.onclick = () => handleColorClick(color);

        colorsList.append(colorOption);
    });

    data.wheels.map((wheel) => {
        let wheelOption = document.createElement('li');
        wheelOption.innerHTML = wheel;
        wheelOption.onclick = () => handleWheelClick(wheel);

        wheelsList.append(wheelOption);
    });

    imgOutput.src = data.images.white_aero;
};

init();