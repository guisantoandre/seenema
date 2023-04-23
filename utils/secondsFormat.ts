export function convertToHours(minutes: number) {
   const hours = Math.floor(minutes / 60);
   const minutesLeft = minutes % 60;
   const hourPlural = hours > 1 ? "horas" : "hora";
   const minutesPlural = minutesLeft > 1 ? "minutos" : "minuto";

   return `${hours} ${hourPlural} ${minutesLeft} ${minutesPlural}`;
}
