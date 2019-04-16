function SwitchButton()
{
    this.status = status;
    this.switchOn = function ()
    {
        this.status = true;
    };
    this.switchOff = function ()
    {
        this.status = false;
    };
}

function ElectricLamp()
{
    this.setSwitchButton = function (switchButton)
    {
        this.switchButton = switchButton;
    };
    this.connectToSwitchButton = function ()
    {
            return this.switchButton.status;
    }
    this.light = function () {
        if(this.switchButton.status){
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    };
}

let electricLamp = new ElectricLamp();
let switchButton = new SwitchButton();
electricLamp.setSwitchButton(switchButton);
for (let i = 0; i < 10; i++)
{
    switchButton.switchOn();
    electricLamp.light();
    switchButton.switchOff();
    electricLamp.light();
}