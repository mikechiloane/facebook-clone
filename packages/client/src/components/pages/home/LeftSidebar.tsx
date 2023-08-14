import React from 'react';

const LeftSidebar: React.FC = () => {
  return (
    <div className="w-9/12 h-auto py-3">
      <ul className="w-full text-gray-600">
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://picsum.photos/200/307"
              alt="user"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Mike Chiloane</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://picsum.photos/200/305"
              alt="info"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Covid-19 Information Center</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://picsum.photos/200/304"
              alt="friends"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Friends</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://picsum.photos/200/302"
              alt="memories"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Memories</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://picsum.photos/200/301"
              alt="pages"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Pages</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://picsum.photos/200/300"
              alt="groups"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Groups</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
