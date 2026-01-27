// Example: How to use Supabase in your components
// 
// import { supabase } from './supabase'
//
// // Example: Fetch data from a table
// async function fetchBookings() {
//   const { data, error } = await supabase
//     .from('bookings')
//     .select('*')
//   
//   if (error) {
//     console.error('Error fetching bookings:', error)
//     return null
//   }
//   
//   return data
// }
//
// // Example: Insert data
// async function createBooking(bookingData: any) {
//   const { data, error } = await supabase
//     .from('bookings')
//     .insert([bookingData])
//     .select()
//   
//   if (error) {
//     console.error('Error creating booking:', error)
//     return null
//   }
//   
//   return data
// }
//
// // Example: Real-time subscriptions
// supabase
//   .channel('bookings')
//   .on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, (payload) => {
//     console.log('Change received!', payload)
//   })
//   .subscribe()

export {}
