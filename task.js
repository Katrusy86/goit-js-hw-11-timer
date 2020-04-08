class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = document.querySelector(`${selector}`);
        this.targetDate = targetDate;
        this.days = this.selector.querySelector('span[data-value="days"]');
        this.hours = this.selector.querySelector('span[data-value="hours"]');
        this.mins = this.selector.querySelector('span[data-value="mins"]');
        this.secs = this.selector.querySelector('span[data-value="secs"]'); 
        this.timeInterval() 
        this.timeFirst() 
    }

    timeInterval(){
        const idInterval = setInterval(()=>{
            const currentTimer = Date.now();
            const time =  this.targetDate - currentTimer
            this.getTime(time)
            if(time<=0){
                clearInterval(idInterval)
            }
        },1000)
    }

    timeFirst(){
        const currentTimer = Date.now();
        const time =  this.targetDate - currentTimer
        this.getTime(time)
    }

getTime(time) { 
    /*
    * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
    * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
    */
   const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
   
   /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  
  /*
  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
  */
 const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
 
 /*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

this.timerClockInterface(days,hours,mins,secs)
}

  timerClockInterface(days,hours,mins,secs){
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }

    pad(value) {
        return String(value).padStart(2,'0');
    }
}

const timerClock = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});
