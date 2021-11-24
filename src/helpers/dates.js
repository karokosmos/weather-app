const formatDate = date => {
  const formattedDate = date.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short'
  })

  return formattedDate
}

export const getDateForToday = () => {
  const date = new Date()
  return formatDate(date)
}

export const getDateFromTimestamp = stamp => {
  const date = new Date(stamp * 1000)
  return formatDate(date)
}