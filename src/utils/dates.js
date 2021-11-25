const formatDate = (date, timezone = 'Europe/Helsinki') => {
  const formattedDate = date.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', timeZone: timezone
  })

  return formattedDate
}

export const getDateForToday = timezone => {
  const date = new Date()
  return formatDate(date, timezone)
}

export const getDateFromTimestamp = stamp => {
  const date = new Date((stamp + 25200) * 1000)
  return formatDate(date)
}