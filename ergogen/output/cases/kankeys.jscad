function _board_outline_extrude_3_outline_fn(){
    return new CSG.Path2D([[114.5228295,-7.412793],[120.2423848,-13.6789294]]).appendArc([120.6562514,-15.6783861],{"radius":2,"clockwise":true,"large":false}).appendPoint([113.0338065,-37.8155737]).appendArc([110.4916331,-39.0554745],{"radius":2,"clockwise":true,"large":false}).appendPoint([101.6117933,-35.9979005]).appendArc([101.5957363,-35.9922951],{"radius":2,"clockwise":true,"large":false}).appendPoint([88.7690688,-31.4533529]).appendArc([88.4319708,-31.3662135],{"radius":2,"clockwise":false,"large":false}).appendPoint([73.745106,-28.9084752]).appendArc([73.478694,-28.8820605],{"radius":2,"clockwise":false,"large":false}).appendPoint([67.4818321,-28.6910141]).appendArc([67.4181489,-28.69],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.2533466,-28.69]).appendArc([47.8698661,-28.1342929],{"radius":2,"clockwise":true,"large":false}).appendPoint([30.9801338,-11.9557072]).appendArc([29.5966534,-11.4],{"radius":2,"clockwise":false,"large":false}).appendPoint([-9.4,-11.4]).appendArc([-11.4,-9.4],{"radius":2,"clockwise":true,"large":false}).appendPoint([-11.4,47.4]).appendArc([-9.4,49.4],{"radius":2,"clockwise":true,"large":false}).appendPoint([5.6,49.4]).appendArc([7.6,51.4],{"radius":2,"clockwise":false,"large":false}).appendPoint([7.6,55]).appendArc([9.6,57],{"radius":2,"clockwise":true,"large":false}).appendPoint([24.6,57]).appendArc([26.6,59],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.6,60.32]).appendArc([28.6,62.32],{"radius":2,"clockwise":true,"large":false}).appendPoint([47.4,62.32]).appendArc([49.4,60.32],{"radius":2,"clockwise":true,"large":false}).appendPoint([49.4,58.05]).appendArc([51.4,56.05],{"radius":2,"clockwise":false,"large":false}).appendPoint([65.6152603,56.05]).appendArc([67.0951405,55.3953456],{"radius":2,"clockwise":true,"large":false}).appendPoint([68.4,53.96]).appendPoint([112,53.96]).appendArc([114,51.96],{"radius":2,"clockwise":true,"large":false}).appendPoint([114,-6.0644728]).appendArc([114.5228296,-7.412793],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function _keycap_outlines_extrude_6_outline_fn(){
    return new CSG.Path2D([[95.1309486,-31.7568874],[109.3137271,-36.6404097]]).appendArc([111.8559006,-35.4005089],{"radius":2,"clockwise":false,"large":false}).appendPoint([116.739423,-21.2177304]).appendArc([115.4995222,-18.6755569],{"radius":2,"clockwise":false,"large":false}).appendPoint([101.3167437,-13.7920345]).appendArc([98.7745702,-15.0319353],{"radius":2,"clockwise":false,"large":false}).appendPoint([93.8910478,-29.2147138]).appendArc([95.1309486,-31.7568873],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[52.35,-26.79],[67.35,-26.79]]).appendArc([69.35,-24.79],{"radius":2,"clockwise":false,"large":false}).appendPoint([69.35,-9.79]).appendArc([67.35,-7.79],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.35,-7.79]).appendArc([50.35,-9.79],{"radius":2,"clockwise":false,"large":false}).appendPoint([50.35,-24.79]).appendArc([52.35,-26.79],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[74.0250046,-27.0288945],[88.8192887,-29.5046086]]).appendArc([91.1219551,-27.8621326],{"radius":2,"clockwise":false,"large":false}).appendPoint([93.5976692,-13.0678485]).appendArc([91.9551932,-10.7651821],{"radius":2,"clockwise":false,"large":false}).appendPoint([77.1609091,-8.289468]).appendArc([74.8582427,-9.931944],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.3825286,-24.7262281]).appendArc([74.0250046,-27.0288945],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,-9.5],[7.5,-9.5]]).appendArc([9.5,-7.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([9.5,-3.9]).appendArc([11.5,-1.9],{"radius":2,"clockwise":true,"large":false}).appendPoint([26.5,-1.9]).appendArc([28.5,0.1],{"radius":2,"clockwise":false,"large":false}).appendPoint([28.5,1.42]).appendArc([30.5,3.42],{"radius":2,"clockwise":true,"large":false}).appendPoint([45.5,3.42]).appendArc([47.5,1.42],{"radius":2,"clockwise":true,"large":false}).appendPoint([47.5,-0.85]).appendArc([49.5,-2.85],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.5,-2.85]).appendArc([66.5,-4.85],{"radius":2,"clockwise":true,"large":false}).appendPoint([66.5,-4.94]).appendPoint([83.5,-4.94]).appendArc([85.5,-2.94],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.5,50.06]).appendArc([83.5,52.06],{"radius":2,"clockwise":false,"large":false}).appendPoint([68.5,52.06]).appendArc([66.5,54.06],{"radius":2,"clockwise":true,"large":false}).appendPoint([66.5,54.15]).appendPoint([49.5,54.15]).appendArc([47.5,56.15],{"radius":2,"clockwise":true,"large":false}).appendPoint([47.5,58.42]).appendArc([45.5,60.42],{"radius":2,"clockwise":false,"large":false}).appendPoint([30.5,60.42]).appendArc([28.5,58.42],{"radius":2,"clockwise":false,"large":false}).appendPoint([28.5,57.1]).appendArc([26.5,55.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([11.5,55.1]).appendArc([9.5,53.1],{"radius":2,"clockwise":false,"large":false}).appendPoint([9.5,49.5]).appendArc([7.5,47.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([-7.5,47.5]).appendArc([-9.5,45.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-9.5,-7.5]).appendArc([-7.5,-9.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 6] });
}




                function kankeys_case_fn() {
                    

                // creating part 0 of case kankeys
                let kankeys__part_0 = _board_outline_extrude_3_outline_fn();

                // make sure that rotations are relative
                let kankeys__part_0_bounds = kankeys__part_0.getBounds();
                let kankeys__part_0_x = kankeys__part_0_bounds[0].x + (kankeys__part_0_bounds[1].x - kankeys__part_0_bounds[0].x) / 2
                let kankeys__part_0_y = kankeys__part_0_bounds[0].y + (kankeys__part_0_bounds[1].y - kankeys__part_0_bounds[0].y) / 2
                kankeys__part_0 = translate([-kankeys__part_0_x, -kankeys__part_0_y, 0], kankeys__part_0);
                kankeys__part_0 = rotate([0,0,0], kankeys__part_0);
                kankeys__part_0 = translate([kankeys__part_0_x, kankeys__part_0_y, 0], kankeys__part_0);

                kankeys__part_0 = translate([0,0,0], kankeys__part_0);
                let result = kankeys__part_0;
                
            

                // creating part 1 of case kankeys
                let kankeys__part_1 = _keycap_outlines_extrude_6_outline_fn();

                // make sure that rotations are relative
                let kankeys__part_1_bounds = kankeys__part_1.getBounds();
                let kankeys__part_1_x = kankeys__part_1_bounds[0].x + (kankeys__part_1_bounds[1].x - kankeys__part_1_bounds[0].x) / 2
                let kankeys__part_1_y = kankeys__part_1_bounds[0].y + (kankeys__part_1_bounds[1].y - kankeys__part_1_bounds[0].y) / 2
                kankeys__part_1 = translate([-kankeys__part_1_x, -kankeys__part_1_y, 0], kankeys__part_1);
                kankeys__part_1 = rotate([0,0,0], kankeys__part_1);
                kankeys__part_1 = translate([kankeys__part_1_x, kankeys__part_1_y, 0], kankeys__part_1);

                kankeys__part_1 = translate([0,0,0], kankeys__part_1);
                result = result.union(kankeys__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return kankeys_case_fn();
            }

        