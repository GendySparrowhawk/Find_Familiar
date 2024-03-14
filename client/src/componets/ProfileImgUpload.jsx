import { useState } from "react";
import { gql, useMutation } from '@apollo/client'
import { useStore } from '../store'

import { AUTHENTICATE } from '../App';

import Alert from './Alert'

const UPLOAD_PROFILE_PICTURE