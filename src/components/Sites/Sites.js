import site1 from "../../assets/site1.jpg";

const Sites = (name,description,imgS) => {
    return(
        <div className="mx-auto w-4/5">
            <a href="#" class="flex flex-row flex-wrap items-center  bg-white border rounded-lg shadow-md md:flex-row md:flex-nowrap md:hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md: md:w-1/3 md:rounded-none md:rounded-l-lg" src={site1} alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </a>
        </div>
    )
}

export default Sites;