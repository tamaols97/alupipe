export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export function stringDashToShiftDash(string) {
  return string.split("-").join("_")
}