import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  h: number  = 0;
  w: number = 0;


  calc()
  {
    var r = this.w/(this.h*this.h);
    var msg;
    if(r < 18.5)
    {
        msg = "Magreza";
    }
    else
    {
        if(r < 25)
        {
            msg = "Normal";
        }
        else
        {
            if(r < 30)
            {
                msg = "Sobrepeso";
            }
            else
            {
                if(r < 35)
                {
                    msg = "Obesidade grau I";
                }
                else
                {
                    if(r < 40)
                    {
                        msg = "Obesidade grau II";
                    }
                    else
                    {
                        msg = "Obesidade grau III";
                    }
                }
            }
        }
    }
    alert(msg);
  }
}
