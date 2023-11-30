import { Fragment } from 'react';
import Image from 'next/image';

import { Dialog,Transition } from '@headlessui/react';

import { CarProps } from '@/types'
import React from 'react'

interface CarDetailsPrps {
    isOpen:boolean,
    closeModal:()=> void,
    car:CarProps;
}

const CarDetails = ({isOpen,closeModal,car}: CarDetailsPrps) => {
  return(
   <>
   <Transition appear show={isOpen} as={Fragment}>
    {/* <Dialog>

    </Dialog> */}
   </Transition>
   </>
    )
}

export default CarDetails