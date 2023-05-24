/**
 * Author: Jesus Sagastume
 * Date: 2023-05-23
 * Purpose: Code exercise at PerseusX
 */

const sortArray = (array, property) => {
  return array.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1
    }
    if (a[property] > b[property]) {
      return 1
    }
    return 0
  })
}


/**
 *  Data to work with it
 */

let data = [
  {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': 'Inactive'
  },
  {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': 'Active'
  },
  {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Inactive'
  },
  {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Active'
  }
]

/**
 *  add new object to the array
 */
const newObject =   {
  'Name': 'Jesus Sagastume',
  'Favorite Food': 'Tacos',
  'Favorite Movie': 'Hacksaw Ridge',
  'Status': 'Active'
}
data = [...data, newObject]


/** 
 * Loop trough the array and add date
 */
data.map((item) => {
  item.date = new Date()
})

/** 
 * Print active records with Name, date, favorite movie for every person
 */
const activeRecords = data.filter((item) => item.Status === 'Active')

if (activeRecords.length > 0) {
  console.log('Active Records')
  console.log('================')
  activeRecords.map((item) => {
    console.log(`Name: ${item.Name} Favorite Movie: ${item['Favorite Movie']} Date: ${item.date}`)
  })
} else {
  console.log('No active records')
}

/**
 * Sort the array by Properties, in this case By Name property
 */
const sortedRecords = sortArray(data, 'Name')
if (sortedRecords.length > 0) {
  console.log('Sorted Records')
  console.log('================')
  sortedRecords.map((item) => {
    console.log(`Name: ${item.Name} Favorite Movie: ${item['Favorite Movie']} Date: ${item.date}`)
  })
}
