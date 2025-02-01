---
title: Elevation maps
tags: [project, elevation, 3dp, maps, 3d-printing]
---

Elevation maps are a project I've been working on-and-off for a while. They're
basically height maps downloaded from NASA, stitched together, and then
converted into a 3D printing file (`.stl`) which can then be printed. The
prints take about 16 to 20 hours on my Creality Ender 3 Pro, but they're
_really cool_.

Fetching and interpreting the raw files is non-trivial for what I assume are
bureaucratic reasons, but I've created a python wrapper that abstracts around
the whole thing. For an altitude map of the southern part of South Africa, I
just type:

```sh
uv --offline run create-png.py --bbox -33 18.175 -35 22 --drop-ocean 100
```

(why offline?[^1], what's `uv`?[^2])

And then I get out an image like:

![[elevation.jpg]]

Which I think is pretty cool. The `--bbox` argument takes a bounding box like
`top left bottom right`, and the `--drop-ocean` will drop the ocean by some
number of meters. This helps make the print look better and stops low-altitude
regions from blending into the ocean, especially when your printer's z-height
is 0.2mm.

I can also zoom in closer to Cape Town:

```sh
uv --offline run create-png.py --bbox -33.85 18.275 -34.4 18.525 --drop-ocean 100
```

<center>
    <img src="/assets/elevation-cape-town.jpg" width="auto" height="600px" alt="">
</center>

When they're printed out, I think they are really cool:

<table>
  <tr>
    <td>
        <center>
            <img src="/assets/print1.jpg" width="auto" height="auto" alt="">
            <p>3D print of Cape Town and the south-western coast of South Africa</p>
        </center>
    </td>
    <td>
        <center>
            <img src="/assets/print1-osm.jpg" width="auto" height="auto" alt="">
            <p>Regular map showing cities and towns of the 3D printed region (© OpenStreetMap contributors)</p>
        </center>
    </td>
  </tr>
  <tr>
    <td>
        <center>
            <img src="/assets/print2.jpg" width="60%" height="auto" alt="">
            <p>3D print of a closer view of the Cape Peninsula, False bay, and
            Stellenbosch.</p>
        </center>
    </td>
    <td>
        <center>
            <img src="/assets/print2-osm.jpg" width="100%" height="auto" alt="">
            <p>Regular map showing cities and towns of the 3D printed region (© OpenStreetMap contributors)</p>
        </center>
    </td>
  </tr>
<table>

I've put some of these STL files up on [cults3d][1] and will soon put up some
more, once I've gotten my 3D printer up and running, reach out if you'd like a
discount code (:

[^1]:
    As I write this, South Africa's power utility is unable to generate
    sufficient electricity for the entire country, and so is shutting off the power
    for selected regions. See [this project](projects/eskom-calendar.md) for
    details and a write-up of my open-source project that provides loadshedding
    information to the country.

[^2]:
    `uv` is like python3, pip, venv, and all other python tools rolled into
    one! Give it a go (: https://docs.astral.sh/uv/

[1]: https://cults3d.com/en/3d-model/art/western-cape-altitude-topography-map-south-africa
