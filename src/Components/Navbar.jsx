import React from 'react'
import "../css/Navbar.css"
import {Link as ScrollLink} from "react-scroll"
import file from "./File/Resume.pdf"


import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    IconButton,
    Button,
    Stack,
    Flex,
  } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {

  return (
    <div className='nav-menu' >

     <div className='firstdivAMAN'id="user-detail-name" >
       AMAN KUMAR MAURYA
     </div>


      <div className='seconddivAMAN' >
        <ScrollLink to="home" smooth={true}  duration={500} >
        <div className="nav-link home" id="navhomeAMAN" >HOME</div>
        </ScrollLink>

        <ScrollLink to="about" smooth={true}  duration={500} >
        <div className='nav-link about' id="navabouAMANt" >ABOUT</div>
        </ScrollLink>

        <ScrollLink to="projects" smooth={true}  duration={1000} >
        <div className='nav-link projects' id="navprojectsAMAN" >PROJECTS</div>
        </ScrollLink>

        <ScrollLink to="skills" smooth={true}  duration={1000} >
        <div className='nav-link skills' id="navskillsAMAN" >SKILLS</div>
        </ScrollLink>

        <ScrollLink to="contact" smooth={true}  duration={1000} >
        <div className='nav-link contact' id="navcontactAMAN" >CONTACTS</div>
        </ScrollLink>

       <a href={file}   download="Aman_Maurya_Resume.pdf"  target="_blank" >
       <button className='nav-link resume' id="navresumeAMAN"  >RESUME</button>
       </a>

    
      </div>


      <div className='ham' >
       <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<HamburgerIcon  />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>

              <ScrollLink to="home" smooth={true}  duration={500} >
              <Button
                w="194px"
                variant="ghost"
              
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm">
                HOME
              </Button>
              </ScrollLink>

              <ScrollLink  to="about" smooth={true}  duration={500} >
              <Button
                w="194px"
                variant="ghost"
             
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                ABOUT
              </Button>
              </ScrollLink>

              <ScrollLink to="projects" smooth={true}  duration={500}  >
              <Button
                w="194px"
                variant="ghost"
             
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                PROJECTS
              </Button>
              </ScrollLink>

              <ScrollLink to="skills" smooth={true}  duration={500} >
              <Button
                w="194px"
                variant="ghost"
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                SKILLS
              </Button>
              </ScrollLink>

              <ScrollLink to="contact" smooth={true}  duration={500} >
              <Button
                w="194px"
                variant="ghost"
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                CONTACT
              </Button>
              </ScrollLink>
              <a href={file} download="Aman_Maurya_Resume.pdf"  >
              <Button
                id="resume-link-1"
                w="194px"
                variant="ghost"
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
                target="_blank" >

                RESUME
              </Button>
              </a>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>


   
  </div>

    </div>
  )
}

export default Navbar
