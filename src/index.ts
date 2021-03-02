
import { User } from './User'
import { Company } from './Company'
import { } from 'googlemaps'
import {CustomMap} from './CustomMap'

const user: User = new User()
const company: Company = new Company()

const customMap = new CustomMap("map")
customMap.addMarker(user)
customMap.addMarker(company)






