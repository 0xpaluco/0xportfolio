import { Listbox, Transition } from "@headlessui/react";
import { classNames } from "@helpers/ui";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

const Contact = () => {
    return (
        <div className="relative dark:bg-c-bg-light">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover lg:absolute lg:h-full"
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    alt=""
                />
                </div>
            </div>
            <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
                <div className="lg:pr-8">
                <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">Let's work together</h2>
                    <p className="mt-4 text-lg text-gray-400 sm:mt-3">
                        We’d love to hear from you! Tell us how we can help you. 
                    </p>
                    <ContactForm/>
                </div>
                </div>
            </div>
        </div>
    )
}

interface InputProp {
    id: string;
    name: string;
    type?: string;
    autoComplete?: string;
    placeHolder?: string;
    options?: Array<any>; 
}

const Input = (props: InputProp) => {
    return (
        <div className="my-1 mx-2 border-b w-max">
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                autoComplete={props.autoComplete}
                placeholder={props.placeHolder}
                className="appearance-none bg-transparent border-none w-full text-center text-sm text-white md:text-lg mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-transparent focus:border-b-c-l-primary"
            />
        </div>
    )
}



const SelectMenu = (props: InputProp) => {
    const option = props.options ?  props.options[0] : null

    const [selected, setSelected] = useState(option);
    return (
        <Listbox value={selected} onChange={setSelected} name={props.name}>
            {({ open }) => (
                <>
                <div className="my-2 relative mx-2 sm:mx-4 w-max">
                    <Listbox.Button id={props.id} className="relative border-b border-gray-300 shadow-sm pl-3 pr-10 py-2 text-center cursor-default focus:outline-none focus:ring-1 focus:ring-transparent focus:transparent text-base">
                        <span className="block truncate">{selected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options className="absolute z-10 mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                            {props.options?.map((service) => (
                            <Listbox.Option
                                key={service.id}
                                className={({ active }) =>
                                classNames(
                                    active ? 'text-white bg-c-primary' : 'text-gray-900',
                                    'cursor-default select-none relative py-2 pl-8 pr-4'
                                )
                                }
                                value={service}
                            >
                                {({ selected, active }) => (
                                <>
                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                    {service.name}
                                    </span>

                                    {selected ? (
                                    <span
                                        className={classNames(
                                        active ? 'text-white' : 'text-c-primary',
                                        'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                        )}
                                    >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    ) : null}
                                </>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
                </>
            )}
        </Listbox>
    )
}

const ContactForm = () => {
    const services = [
        { id: 1, name: 'Lauch a NFT Collection' },
        { id: 2, name: 'Develop a Smart Contract' },
        { id: 3, name: 'Develop a Custom Dapp' },
    
      ]
    
      const workWith = [
        { id: 1, name: '0' },
        { id: 2, name: '1' },
        { id: 3, name: '2' },
    
      ]
    
      const channels = [
        { id: 1, name: 'TikTok' },
        { id: 2, name: 'Instagram' },
        { id: 3, name: 'Youtube' },
        { id: 4, name: 'Twitter' },
        { id: 5, name: 'Other' },
    
      ]
    
      const budget = [
        { id: 1, name: '$7,000 - $10,000' },
        { id: 2, name: '$10,000 - $15,000' },
        { id: 3, name: '$15,000 - $25,000' },
        
    
      ]

    return (
        <form action="#" method="POST" className="mt-9">

            <div className="text-base md:text-lg font-thin tracking-tight text-white my-4">

                <p className="my-4 flex flex-wrap">
                    <span>Hey there,</span>
                </p>
                <p className="my-4 flex flex-wrap items-end">
                    <span>My name is</span>
                    <Input id={"first-name"} name={"first-name"} type={"text"} autoComplete={"given-name"} placeHolder={"First and Last Name"}/>,
                </p>
                <p className="flex flex-wrap items-end">
                    <span>I work for</span>
                    <Input id={"company-name"} name={"company-name"} type={"text"} autoComplete={"company-name"} placeHolder={"Company Name"}/> {" "} and
                </p>
                <p className="flex flex-wrap items-end">
                    <span>we could use your services for: </span> 
                    <SelectMenu id={"services"} name={"service"} options={services}/>
                </p>


                <p className="flex flex-wrap items-end mt-8">
                    <span>We already contacted</span> 
                    <SelectMenu id={"company-count"} name={"company-count"} options={workWith}/>
                    <span>companies</span> 
                </p>
                
                <p className="flex flex-wrap items-end">
                    <span>But we seen you on</span> 
                    <SelectMenu id={"channels"} name={"channels"} options={channels}/>
                    <span>and</span> 
                </p>
                <p className="flex flex-wrap items-end">
                    <span> want to work with you because </span> 
                    <Input id={"reason"} name={"reason"} type={"text"} placeHolder={"Reason"}/>
                </p>
                


                <p className="flex flex-wrap items-center mt-8">
                    <span>We will invest between</span>
                    <SelectMenu id={"budget"} name={"budget"} options={budget}/>
                    <span>in this project.</span>
                </p>
                

                <p className="flex flex-wrap items-end mt-8">
                    <span>You can reach me at</span>
                    <Input id={"phone"} name={"phone"} type={"phone"} placeHolder={"Phone Number"}/> {" "}
                </p>
                <p className="flex flex-wrap items-end">
                    <span>Or by email at </span>
                    <Input id={"email"} name={"email"} type={"email"} placeHolder={"Email"}/> {" "}
                </p>
            </div>
            

              
              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-c-primary hover:bg-c-d-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c-l-primary"
                >
                  Submit
                </button>
              </div>
            </form>
    )
}

export default Contact;