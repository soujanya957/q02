
module.exports = {
    params: {
        designator: 'EN1',
        value: 'EVQWGD001',
    },
    body: p => `
        (module "${p.designator}" (layer "F.Cu")
            (fp_text reference "${p.designator}" (at 0 -1.5) (layer "F.Fab")
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text value "${p.value}" (at 0 10) (layer "F.Fab")
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_line (start -7.048 -8.4) (end 7.248 -8.4) (layer "Dwgs.User") (width 0.12))
            (fp_line (start -7.048 -8.4) (end -7.048 8.4) (layer "Dwgs.User") (width 0.12))
            (fp_line (start 7.248 8.4) (end -7.048 8.4) (layer "Dwgs.User") (width 0.12))
            (fp_line (start 7.248 -8.4) (end 7.248 8.4) (layer "Dwgs.User") (width 0.12))
            (fp_line (start -6.952 -7.4) (end 7.148 -7.4) (layer "Edge.Cuts") (width 0.05))
            (fp_arc (start 7.148 -9.8) (mid 7.360132 -9.712132) (end 7.448 -9.5) (layer "Edge.Cuts") (width 0.05))
            (fp_arc (start -7.248 -9.5) (mid -7.160132 -9.712132) (end -6.948 -9.8) (layer "Edge.Cuts") (width 0.05))
            (pad "" thru_hole oval (at 4.072 5.375 270) (size 2.1 1.6) (drill oval 1.6 1.1) (layers *.Cu *.Mask))
            (pad "" smd custom (at 3.81 4.008 180) (size 0.25 1) (layers "F.Cu"))
            (pad "" smd custom (at -1.27 4.008 180) (size 0.25 1) (layers "B.Cu"))
            (pad "A" smd custom (at -3.81 2.484 180) (size 1.2 0.5) (layers "B.Cu" "B.Mask"))
            (pad "B" smd custom (at -1.27 2.484 180) (size 1.2 0.5) (layers "B.Cu" "B.Mask"))
            (pad "A" smd custom (at 3.81 2.484 180) (size 1.2 0.5) (layers "F.Cu" "F.Mask"))
            (pad "B" smd custom (at 1.27 2.484 180) (size 1.2 0.5) (layers "F.Cu" "F.Mask"))
        )
    `
};
