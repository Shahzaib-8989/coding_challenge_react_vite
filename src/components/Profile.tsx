// import CoverOne from '../images/cover/cover-01.png';
import ProfileTabs from './ProfileTabs'
import { useLocation } from 'react-router-dom'
import { User } from '@/types/interfaces'
import image from '@/assets/images/user/user-02.png'

const Profile = () => {
  const { state } = useLocation<{ state: User }>()
  const user: User | undefined = state ? state[0] : null

  return (
    <>
      <div className=" p-5">
        <div className="overflow-hidden rounded-sm bg-white shadow-default ">
          <div className="relative z-20 h-20 bg-[#F5F5F5] border-b-1 border-[858383] md:h-30 bg-whitesmoke"></div>
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative z-30 mx-auto -mt-22 h-20 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-30 sm:max-w-30 sm:p-3">
              <div className="relative drop-shadow-2">
                <img
                  src={user?.picture?.large ? user?.picture?.large :image}
                  alt="profile"
                  className="h-25 w-25 rounded-full"
                />
              </div>
            </div>
            <div className="mt-6">
              <p className="font-medium">Hi, My name is</p>
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                {user?.name?.first} {user?.name?.last}
              </h3>
              <div className="mx-auto max-w-180 mt-10">
                <h4 className="font-semibold text-black dark:text-white">
                  About Me
                </h4>
                <p className="mt-4.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque posuere fermentum urna, eu condimentum mauris
                  tempus ut. Donec fermentum blandit aliquet. Etiam dictum
                  dapibus ultricies. Sed vel aliquet libero. Nunc a augue
                  fermentum, pharetra ligula sed, aliquam lacus.
                </p>
              </div>

              <div className="mt-10">
                <ProfileTabs user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
