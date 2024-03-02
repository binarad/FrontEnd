var showTime = () => {
    console.log("run");
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");
    let ampm = document.getElementById("ampm");

    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();

    let slot = "AM";
    if (hh>12){hh=hh-12;slot="PM"}
    let doubleNum = (num) => {
        num = num < 10 ? "0"+num : num ;
        return num;
    }
    hh = doubleNum(hh);
    mm = doubleNum(mm);
    ss = doubleNum(ss);

    hour.innerHTML = hh;
    minute.innerHTML = mm;
    second.innerHTML = ss;
    ampm.innerHTML = slot;
}
setInterval(showTime,1000);