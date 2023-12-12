export default function useHoraData() {
  let newDate = new Date();
  function Hora() {
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    if (minutes < 10) {
      let hora = hour + ":" + "0" + minutes;
      return hora;
    } else {
      let hora = hour + ":" + minutes;
      return hora;
    }
  }
  function Data() {
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let data = date + "/" + month + "/" + year;
    return data;
  }

  function Timestamp() {
    let timestamp = newDate.getTime();
    return timestamp;
  }
  return { Data, Hora, Timestamp };
}
