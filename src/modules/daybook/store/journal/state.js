

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed quaerat culpa, cupiditate dignissimos error doloremque nulla provident debitis harum perferendis velit voluptatem quasi rem sit, laborum rerum, dolorum corrupti.',
            img: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed quaerat culpa, cupiditate dignissimos error doloremque nulla provident debitis harum perferendis velit voluptatem quasi rem sit, laborum rerum, dolorum corrupti.',
            img: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed quaerat culpa, cupiditate dignissimos error doloremque nulla provident debitis harum perferendis velit voluptatem quasi rem sit, laborum rerum, dolorum corrupti.',
            img: null,
        },
    ]
})