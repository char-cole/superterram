import {
  geoConicEqualArea,
  geoMercator,
  geoNaturalEarth1,
  geoAzimuthalEqualArea,
  geoOrthographic
} from 'd3-geo'
import { geoHill } from 'd3-geo-projection'

export const renderProjection = (projection, longLat) => {
  const findRotationCoords = r => {
    if (r[0]) {
      if (r[0] < -45) return [90, 0]
      if (r[0] > 45 && r[0] < 135) return [-90, 0]
      if (r[0] >= 135) return [-180, 0]
    }
    return [0, 0]
  }
  switch (projection) {
    case 'geoOrthographic': {
      return geoOrthographic()
        .scale(200)
        .translate([800 / 2, 450 / 2])
        .rotate(findRotationCoords(longLat || [0, 0]))
    }
    case 'geoNaturalEarth1': {
      return geoNaturalEarth1()
        .scale(100)
        .translate([800 / 2, 450 / 2])
    }
    case 'geoAzimuthalEqualArea': {
      return geoAzimuthalEqualArea()
        .scale(100)
        .translate([800 / 2, 450 / 2])
        .rotate([0, -90])
    }
    case 'geoHill': {
      return geoHill()
        .scale(100)
        .translate([800 / 2, 450 / 2])
    }
    case 'geoMercator': {
      return geoMercator()
        .scale(100)
        .translate([800 / 2, 450 / 2])
    }
    case 'geoConicEqualArea': {
      return geoConicEqualArea()
        .scale(100)
        .translate([800 / 2, 450 / 2])
    }
    default: {
      return null
    }
  }
}
