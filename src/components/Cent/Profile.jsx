const Profile = () => {
  return (
    <section>
      <header>
        <div>
          <a href="#" className="textGreen">
            Back to Home
          </a>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl">Profile Setting </h2>
            <button className="btnOutline px-4">Account Settings</button>
          </div>
        </div>
      </header>
      <div>
        <div className="bdBottom flex justify-between items-centers pb-2">
          <h3>Primary Info</h3>
          <p>⤵ </p>
        </div>
        <p className="borderGray mb-4 w-1/3 px-4 py-2">Adebayo</p>
        <p className="borderGray mb-4 w-1/3 px-4 py-2">Moses</p>
        <p className="borderGray mb-4 w-1/3 px-4 py-2">
          Mosesadebayo@gmail.com
        </p>
      </div>
      <div>
        <div className="bdBottom flex justify-between items-centers pb-2">
          <h3>Email Settings</h3>
          <p>⤵ </p>
        </div>

        <form>
          <div className="flex flex-col">
            <label htmlFor="">Current Email</label>

            <input
              type="text"
              className="borderGray px-4 py-2 text-gray-200 w-1/3"
              placeholder=" Mosesadebayo@gmail.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">New Email</label>

            <input
              type="text"
              className="borderGray px-4 py-2 text-gray-200 w-1/3"
              placeholder=" Mosesadebayo@gmail.com"
            />
          </div>
          <button className="btnFill px-6">Change Emails</button>
        </form>
      </div>
      <div>
        <div className="bdBottom flex justify-between items-centers pb-2">
          <h3>Password Settings</h3>
          <p>⤵ </p>
        </div>

        <form>
          <div className="flex flex-col">
            <label htmlFor="">Current Password</label>

            <input
              type="text"
              className="borderGray px-4 py-2 text-gray-200 w-1/3"
              placeholder=" Mosesadebayo@gmail.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">New Password</label>

            <input
              type="text"
              className="borderGray px-4 py-2 text-gray-200 w-1/3"
              placeholder=" Mosesadebayo@gmail.com"
            />
          </div>
          <button className="btnFill px-6">Change Password</button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
