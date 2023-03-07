import { IPClient } from "../../pages";
import { useState } from "react";
import RegisterModal from "../modals/RegisterModal";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { IValues } from "../modals/RegisterModal";

export default function ClientTable({
  clients,
  onRegister,
}: {
  clients: IPClient[];
  onRegister: (body: IValues) => void;
}) {
  // Get highlight query param
  const router = useRouter();
  const { highlight } = router.query;
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className='border-b border-gray-200 bg-white px-4 py-5 sm:px-6'>
        <div className='-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap'>
          <div className='ml-4 mt-2'>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>
              Clients
            </h3>
          </div>
          <div className='ml-4 mt-2 flex-shrink-0'>
            {/* Make Register button open modal */}
            <button
              type='button'
              className='relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              onClick={() => { setShowModal(true); }}
            >
              Register new client
            </button>
            {showModal &&
              <div className="flex justify-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto bg-white h-modal md:h-full">
                <RegisterModal setShowModal={setShowModal} onRegister={onRegister} />
              </div>
            }
          </div>
        </div>

        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='mt-8 flow-root'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                      >
                        Name
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Rate
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Support Tier
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {clients.map((client) => (
                      <tr className={highlight === client.id ? "bg-sandy" : ""} key={client.id}>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0'>
                          <div className='flex items-center'>
                            <div className='h-10 w-10 flex-shrink-0'>
                              <img
                                className='h-10 w-10 rounded-full'
                                src={
                                  client.avatar
                                }
                                alt=''
                              />
                            </div>
                            <div className='ml-4'>
                              <div className='font-medium text-gray-900'>
                                {
                                  client.fullName
                                }
                              </div>
                              {/* Make email copiable */}
                              <CopyToClipboard text={client.email}>
                                <div className='text-gray-500'>
                                  {client.email}
                                  <FontAwesomeIcon className="ml-1 text-gray-400 hover:text-gray-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center inline-flex items-center" icon={faCopy} />
                                </div>
                              </CopyToClipboard>
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          <div className='text-gray-900'>
                            {`$${client.hourlyRate}/hr`}
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {client.supportTier ===
                            'gold' ? (
                            <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                              Gold
                            </span>
                          ) : client.supportTier ===
                            'platinum' ? (
                            <span className='inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800'>
                              Platinum
                            </span>
                          ) : (
                            <span className='inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800'>
                              Standard
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
