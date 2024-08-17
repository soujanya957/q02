
// EC11 rotary encoder
//
// Nets
//    from: corresponds to switch pin 1 (for button presses)
//    to: corresponds to switch pin 2 (for button presses)
//    A: corresponds to pin 1 (for rotary)
//    B: corresponds to pin 2 (for rotary, should be GND)
//    C: corresponds to pin 3 (for rotary)

module.exports = {
  params: {
    from: undefined,
    to: undefined,
    A: undefined,
    B: undefined,
    C: undefined,
    class: "ROT",
  },
  body: (p) => `
    
    (footprint "RollerEncoder"
      (version 20240108)
      (generator "pcbnew")
      (generator_version "8.0")
      (layer "F.Cu")
      (property "Reference" "EN1"
        (at 0.102 -1.5 0)
        (layer "F.Fab")
        (uuid "a128be5a-ae42-4693-af21-2a479c23453d")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (property "Value" "EVQWGD001"
        (at 0.102 10 0)
        (layer "F.Fab")
        (uuid "1165b587-8c3c-40b2-ae13-ac612bef92ef")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (property "Footprint" ""
        (at 0 0 0)
        (layer "F.Fab")
        (hide yes)
        (uuid "487deb4a-5b11-499c-b892-0b919100882a")
        (effects
          (font
            (size 1.27 1.27)
            (thickness 0.15)
          )
        )
      )
      (property "Datasheet" ""
        (at 0 0 0)
        (layer "F.Fab")
        (hide yes)
        (uuid "8a37fc4e-aa65-4791-a445-92d8e3ca4c43")
        (effects
          (font
            (size 1.27 1.27)
            (thickness 0.15)
          )
        )
      )
      (property "Description" ""
        (at 0 0 0)
        (layer "F.Fab")
        (hide yes)
        (uuid "729b79cc-c611-4e6e-b8d1-8e7511ce1a02")
        (effects
          (font
            (size 1.27 1.27)
            (thickness 0.15)
          )
        )
      )
      (attr through_hole)
      (fp_poly
        (pts
          (xy -4.318 2.738) (xy -3.302 2.738) (xy -3.302 3.754) (xy -4.318 3.754)
        )
        (stroke
          (width 0.1)
          (type solid)
        )
        (fill solid)
        (layer "B.Mask")
        (uuid "f8cdb66f-3936-47d2-b645-34451c070114")
      )
      (fp_poly
        (pts
          (xy -1.778 2.738) (xy -0.762 2.738) (xy -0.762 3.754) (xy -1.778 3.754)
        )
        (stroke
          (width 0.1)
          (type solid)
        )
        (fill solid)
        (layer "B.Mask")
        (uuid "96220635-85f4-4d07-99db-a1dca81c569f")
      )
      (fp_poly
        (pts
          (xy 0.762 2.738) (xy 1.778 2.738) (xy 1.778 3.754) (xy 0.762 3.754)
        )
        (stroke
          (width 0.1)
          (type solid)
        )
        (fill solid)
        (layer "B.Mask")
        (uuid "e1df4be0-4764-4e96-ab3a-dd0aa63a3efd")
      )
      (fp_poly
        (pts
          (xy -1.778 2.738) (xy -0.762 2.738) (xy -0.762 3.754) (xy -1.778 3.754)
        )
        (stroke
          (width 0.1)
          (type solid)
        )
        (fill solid)
        (layer "F.Mask")
        (uuid "ac517274-fbec-4390-92e0-09476102cda2")
      )
      (fp_poly
        (pts
          (xy 0.762 2.738) (xy 1.778 2.738) (xy 1.778 3.754) (xy 0.762 3.754)
        )
        (stroke
          (width 0.1)
          (type solid)
        )
        (fill solid)
        (layer "F.Mask")
        (uuid "2674da71-19a7-4c0d-8886-2128ff3051b3")
      )
      (fp_poly
        (pts
          (xy 3.302 2.738) (xy 4.318 2.738) (xy 4.318 3.754) (xy 3.302 3.754)
        )
        (stroke
          (width 0.1)
          (type solid)
        )
        (fill solid)
        (layer "F.Mask")
        (uuid "079385c3-243a-4d2a-b060-06aa941f0d02")
      )
      (fp_line
        (start -7.048 -8.4)
        (end -7.048 8.4)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "Dwgs.User")
        (uuid "ad301faf-0c56-4ea6-9c96-5b31d67ce015")
      )
      (fp_line
        (start -7.048 -8.4)
        (end 7.248 -8.4)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "Dwgs.User")
        (uuid "2aa197ae-3af9-44fa-b062-560e89796199")
      )
      (fp_line
        (start 7.248 -8.4)
        (end 7.248 8.4)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "Dwgs.User")
        (uuid "d088e688-77a8-40ce-8036-233397a6b6f7")
      )
      (fp_line
        (start 7.248 8.4)
        (end -7.048 8.4)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "Dwgs.User")
        (uuid "c2a1f074-678f-4f4a-92c0-39eda7b95920")
      )
      (fp_line
        (start -7.248 -7.7)
        (end -7.248 -9.5)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "Edge.Cuts")
        (uuid "6b51fcbe-6747-45ab-9002-6597df7952fd")
      )
      (fp_line
        (start -6.952 -7.4)
        (end 7.148 -7.4)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "Edge.Cuts")
        (uuid "1949c10f-5521-43be-bff5-46327d5bbb11")
      )
      (fp_line
        (start 7.148 -9.8)
        (end -6.948 -9.8)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "Edge.Cuts")
        (uuid "f0774bf5-a2ec-4d22-80eb-d58593b4895b")
      )
      (fp_line
        (start 7.448 -7.7)
        (end 7.448 -9.5)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "Edge.Cuts")
        (uuid "5301c415-d91d-462b-b155-a211bd0e1ee8")
      )
      (fp_arc
        (start -7.248 -9.5)
        (mid -7.160132 -9.712132)
        (end -6.948 -9.8)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "Edge.Cuts")
        (uuid "369c1beb-08db-46de-a685-d8dcf74a4baa")
      )
      (fp_arc
        (start -6.948 -7.4)
        (mid -7.160132 -7.487868)
        (end -7.248 -7.7)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "Edge.Cuts")
        (uuid "6bab283a-6026-42db-bf35-077c3f9e63f1")
      )
      (fp_arc
        (start 7.148 -9.8)
        (mid 7.360132 -9.712132)
        (end 7.448 -9.5)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "Edge.Cuts")
        (uuid "3248a9ee-ac07-4c04-9d55-4a6131504072")
      )
      (fp_arc
        (start 7.448 -7.7)
        (mid 7.360132 -7.487868)
        (end 7.148 -7.4)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "Edge.Cuts")
        (uuid "e7fda4ea-a1f3-487d-8987-5f7bf152439d")
      )
      (fp_text user "${REFERENCE}"
        (at 0 0 0)
        (layer "B.SilkS")
        (hide yes)
        (uuid "f72e720d-5948-4075-9e55-2fa2bd020732")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify mirror)
        )
      )
      (fp_text user "REF**"
        (at 0 0 0)
        (layer "F.SilkS")
        (hide yes)
        (uuid "ce73430a-64c9-479f-b4b2-096e0abb8d86")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (pad "" thru_hole oval
        (at -4.072 5.375 90)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "53fbb1dd-4e1c-41e6-8784-8e187dc2b0bc")
      )
      (pad "" smd custom
        (at -3.81 3.5 180)
        (size 0.1 0.1)
        (layers "B.Cu" "B.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 -0.2) (xy 0 0.4) (xy -0.6 -0.2) (xy -0.6 -0.4) (xy 0.6 -0.4)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "e800f094-302a-44e0-831f-e5d2860ef21d")
      )
      (pad "" smd custom
        (at -3.81 4.008 180)
        (size 0.25 1)
        (layers "B.Cu")
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives)
        (uuid "a45815c4-8f90-422c-b522-8fecafa71672")
      )
      (pad "" thru_hole oval
        (at -3.548 5.375 270)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "d8ceaa81-788f-4ad1-a0d6-010a8eff132d")
      )
      (pad "" thru_hole oval
        (at -1.532 5.375 90)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "e8fc86ae-4058-4a60-8d00-ed3367476df5")
      )
      (pad "" smd custom
        (at -1.27 3.5 180)
        (size 0.1 0.1)
        (layers "F.Cu" "F.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 -0.2) (xy 0 0.4) (xy -0.6 -0.2) (xy -0.6 -0.4) (xy 0.6 -0.4)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "834b7cd6-027d-4564-9eff-21ce5a2f0461")
      )
      (pad "" smd custom
        (at -1.27 3.5 180)
        (size 0.1 0.1)
        (layers "B.Cu" "B.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 -0.2) (xy 0 0.4) (xy -0.6 -0.2) (xy -0.6 -0.4) (xy 0.6 -0.4)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "7ad9fc09-692e-4ea1-84b9-e3c9b882f7f7")
      )
      (pad "" smd custom
        (at -1.27 4.008 180)
        (size 0.25 1)
        (layers "F.Cu")
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives)
        (uuid "bb1f3c27-20d4-4e48-9002-cf3c78fe9c56")
      )
      (pad "" smd custom
        (at -1.27 4.008 180)
        (size 0.25 1)
        (layers "B.Cu")
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives)
        (uuid "2c8aaf33-1539-4fbe-80e1-e6b555f592a5")
      )
      (pad "" thru_hole oval
        (at -1.008 5.375 270)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "f7e5b409-9506-4bd8-800e-80810849704b")
      )
      (pad "" thru_hole oval
        (at 1.008 5.375 90)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "a744cb17-4582-40b0-b95a-e3fcb798dd63")
      )
      (pad "" smd custom
        (at 1.27 3.5 180)
        (size 0.1 0.1)
        (layers "F.Cu" "F.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 -0.2) (xy 0 0.4) (xy -0.6 -0.2) (xy -0.6 -0.4) (xy 0.6 -0.4)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "e2b739c1-1cf8-48c7-b403-1977f79d41c7")
      )
      (pad "" smd custom
        (at 1.27 3.5 180)
        (size 0.1 0.1)
        (layers "B.Cu" "B.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 -0.2) (xy 0 0.4) (xy -0.6 -0.2) (xy -0.6 -0.4) (xy 0.6 -0.4)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "7e17f519-39cd-4eb6-8b5b-e1f6fda53eaf")
      )
      (pad "" smd custom
        (at 1.27 4.008 180)
        (size 0.25 1)
        (layers "F.Cu")
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives)
        (uuid "ba7cc20c-54d8-44e7-b90a-2d59b0dbf801")
      )
      (pad "" smd custom
        (at 1.27 4.008 180)
        (size 0.25 1)
        (layers "B.Cu")
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives)
        (uuid "723437e3-d1c5-48cb-be97-790f3e10c796")
      )
      (pad "" thru_hole oval
        (at 1.532 5.375 270)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "82a1bb7c-5d3f-432b-afaa-cd7d862d2855")
      )
      (pad "" thru_hole oval
        (at 3.548 5.375 90)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "b2fa9385-aaaf-4c05-b605-b89e6d3e232d")
      )
      (pad "" smd custom
        (at 3.81 3.5 180)
        (size 0.1 0.1)
        (layers "F.Cu" "F.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 -0.2) (xy 0 0.4) (xy -0.6 -0.2) (xy -0.6 -0.4) (xy 0.6 -0.4)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "a0f8080e-3561-440e-a070-16754a801b07")
      )
      (pad "" smd custom
        (at 3.81 4.008 180)
        (size 0.25 1)
        (layers "F.Cu")
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives)
        (uuid "1f962a9c-0e07-43e1-931d-a03010611122")
      )
      (pad "" thru_hole oval
        (at 4.072 5.375 270)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "111c52c9-2ce5-40b5-bd59-cba67c765bca")
      )
      (pad "A" smd custom
        (at -3.81 2.484 180)
        (size 1.2 0.5)
        (layers "B.Cu" "B.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "83a14131-9bea-436e-9738-4114a5a2fa5f")
      )
      (pad "A" smd custom
        (at 3.81 2.484 180)
        (size 1.2 0.5)
        (layers "F.Cu" "F.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "fd468875-7c4a-4529-8aa2-625b90d85915")
      )
      (pad "B" smd custom
        (at -1.27 2.484 180)
        (size 1.2 0.5)
        (layers "B.Cu" "B.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "c9abb833-a0c5-46f9-92d2-9c55340433da")
      )
      (pad "B" smd custom
        (at 1.27 2.484 180)
        (size 1.2 0.5)
        (layers "F.Cu" "F.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "e1217fce-50ed-4684-b528-de626a3b89d0")
      )
      (pad "C" smd custom
        (at -1.27 2.484 180)
        (size 1.2 0.5)
        (layers "F.Cu" "F.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "cf70fb47-615b-426e-bbd4-584145d4454c")
      )
      (pad "C" smd custom
        (at 1.27 2.484 180)
        (size 1.2 0.5)
        (layers "B.Cu" "B.Mask")
        (clearance 0.1)
        (zone_connect 0)
        (options
          (clearance outline)
          (anchor rect)
        )
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
            )
            (width 0)
            (fill yes)
          )
        )
        (uuid "45818f4e-579b-468e-9fb1-dd2f10fa8af2")
      )
      (pad "S1" thru_hole circle
        (at -6.548 6.85 90)
        (size 1.6 1.6)
        (drill 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "a2abb9ba-4f44-4e5a-83be-650fc41cec60")
      )
      (pad "S1" thru_hole circle
        (at 6.548 6.85 270)
        (size 1.6 1.6)
        (drill 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "9486ed8c-15ec-4434-bfb5-2311a4517eeb")
      )
      (pad "S2" thru_hole oval
        (at -6.548 4.75 90)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "f0ed8bd8-e61c-423a-bc12-ea8cb10bba12")
      )
      (pad "S2" thru_hole oval
        (at 6.548 4.75 270)
        (size 2.1 1.6)
        (drill oval 1.6 1.1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "d3880305-ac38-4d5e-bc00-c499210fac97")
      )
      (model "${KICAD_USER_LIB}/3D_models/PanasonicEncoder.STEP"
        (offset
          (xyz 8.3 -7 0)
        )
        (scale
          (xyz 1 1 1)
        )
        (rotate
          (xyz -90 0 -90)
        )
      )
    )
  `,
};
