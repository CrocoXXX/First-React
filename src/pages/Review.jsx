import React from 'react'

const Review = () => {
  // Data Dummy JSON
  const users = [
    {
        id: 1,
        name: 'Cahyo Prakoso',
        review: 'Penjelasanya details, serta solusi mengatasi error disetiap project/materi Mantab',
        photo: 'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg',
    },
    {
        id: 2,
        name: 'Michele Lawon',
        review: 'Membantu sekali untuk yang masih pusing sama React.',
        photo: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',

    },
    {
        id: 3,
        name: 'Agus Syafiudin',
        review: 'Makasih kelas nya semoga ilmu nya bisa bermafaat',
        photo: 'https://images.pexels.com/photos/3008355/pexels-photo-3008355.jpeg',
    }
]

return (
    <div className='w-full overflow-hidden pb-24 clear-both'>
        <h2 className='mt-12 mb-4 text-2xl font-bold'> Reviews </h2>
        {users.map(({ id, name, review, photo }) => (
            <div key={id} className='w-4/5 overflow-hidden mb-6'>
                <img src={photo} alt="Your Face" className='w-20 h-28 rounded-md float-left mr-4 bg-gray1Custom' />
                <div>
                    <h3 className='m-0 pt-3 mb-2 font-bold text-lg'> {name} </h3>
                    <p className='m-0 font-medium'> {review} </p>
                </div>
            </div>
        ))}
    </div>
)
}

export default Review
